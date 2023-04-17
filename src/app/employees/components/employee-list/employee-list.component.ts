import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmpolyeesService } from '../../services/employees.service';
import { uiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnDestroy, DoCheck {
  sub$ = new Subject();
  showEditModel = false;
  showAddModel = false;
  showConfiramtionModel = false;
  display = 'none';
  displayConfirmationModel = 'none';
  isEmplyessChecked = false;
  isEmployeeChecked = false;
  empId;
  emplyessIds;
  selectedItemsList = [];
  loading$;
  displayToast = 'none';
  toastType = '';
  toastMessage = '';
  emplyees!: Employee[];
  emplyeesToDisplay: Employee[] = [];
  currentPage = 1;
  totalPages: number = 0;
  perPage = 10;
  addEmpForm: FormGroup;
  editEmpForm: FormGroup;
  searchForm = new FormGroup({
    searchControl: new FormControl({ value: '', disabled: true }),
  });
  constructor(
    private empSer: EmpolyeesService,
    private fb: FormBuilder,
    private uiSer: uiService
  ) {
    this.getEmplyees();
    this.loading$ = this.uiSer.loading$;
  }

  ngDoCheck(): void {
    this.emplyessIds = this.emplyeesToDisplay.map((emp) => emp.empId);
  }

  ngOnInit(): void {
    this.empSer.getEmployees$.subscribe((res) => {
      this.emplyees = res;
      this.emplyees.sort((a,b)=> b.empId - a.empId)
    });
    this.initAddForm();
    this.initEditForm();
  }
  initAddForm() {
    this.addEmpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
        ],
      ],
      address: ['', Validators.required],
    });
  }
  initEditForm() {
    this.editEmpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
        ],
      ],
      address: ['', Validators.required],
    });
  }
  onAddSubmit() {
    if (this.addEmpForm.invalid) return;
    const employee: Employee = {
      empName: this.addEmpForm.controls['name'].value,
      empEmail: this.addEmpForm.controls['email'].value,
      empPhone: this.addEmpForm.controls['phone'].value,
      empAddress: this.addEmpForm.controls['address'].value,
    };
    this.empSer.addEmployee(employee).subscribe({
      next: (response) => {
        this.closeAddEmpModal();
      },
      error: (err) => {
        this.onToastErrOpenHandled();
          setTimeout(() => {
            this.onToastCloseHandled();
          }, 3000);
      },
      complete: () => {
        this.addEmpForm.reset();
        this.onToastOpenHandled();
        this.getEmplyees();
        setTimeout(() => {
          this.onToastCloseHandled();
        }, 3000);
      },
    });
  }
  onEditSubmit() {
    if (this.editEmpForm.invalid) return;
    const employee: Employee = {
      empId: this.empId,
      empName: this.editEmpForm.controls['name'].value,
      empEmail: this.editEmpForm.controls['email'].value,
      empPhone: this.editEmpForm.controls['phone'].value,
      empAddress: this.editEmpForm.controls['address'].value,
    };
    this.empSer.editEmployee(employee).subscribe({
      next: (response) => {
        this.closeEditEmpModal();
      },
      error: (err) => {
        this.onToastErrOpenHandled();
         setTimeout(() => {
           this.onToastCloseHandled();
         }, 3000);
      },
      complete: () => {
        this.editEmpForm.reset();
        this.onToastOpenHandled();
        this.getEmplyees();
         setTimeout(() => {
           this.onToastCloseHandled();
         }, 3000);
      },
    });
  }
  showAddressErrors() {
    const { dirty, touched, errors } = this.addEmpForm.controls['address'];
    return dirty && touched && errors;
  }
  showNameErrors() {
    const { dirty, touched, errors } = this.addEmpForm.controls['name'];
    return dirty && touched && errors;
  }
  showEmailErrors() {
    const { dirty, touched, errors } = this.addEmpForm.controls['email'];
    return dirty && touched && errors;
  }
  showPhoneErrors() {
    const { dirty, touched, errors } = this.addEmpForm.controls['phone'];
    return dirty && touched && errors;
  }
  handleAddressErrors() {
    const { dirty, touched, errors } = this.editEmpForm.controls['address'];
    return dirty && touched && errors;
  }
  handleNameErrors() {
    const { dirty, touched, errors } = this.editEmpForm.controls['name'];
    return dirty && touched && errors;
  }
  handleEmailErrors() {
    const { dirty, touched, errors } = this.editEmpForm.controls['email'];
    return dirty && touched && errors;
  }
  handlePhoneErrors() {
    const { dirty, touched, errors } = this.editEmpForm.controls['phone'];
    return dirty && touched && errors;
  }
  public onGoTo(page: number): void {
    this.currentPage = page;
    this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
  }

  public onNext(page: number): void {
    if (this.currentPage === this.totalPages) return;
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
    }
  }

  public onPrevious(page: number): void {
    if (this.currentPage === 1) return;
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
    }
  }

  public paginate(current: number, perPage: number): any[] {
    return [...this.emplyees.slice((current - 1) * perPage).slice(0, perPage)];
  }

  getEmplyees() {
    this.empSer
      .getEmployees()
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        this.emplyees = res;
        this.totalPages = Math.ceil(res.length / 10);
        this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
        this.uiSer.loading$.next(false);
      });
  }
  openEditEmpModal(id: string) {
    this.showEditModel = true;
    this.display = 'block';
    this.empId = id;
    const emp = this.emplyees.find((emp) => emp.empId === id);
    this.editEmpForm.patchValue({
      name: emp?.empName,
      email: emp?.empEmail,
      phone: emp?.empPhone,
      address: emp?.empAddress,
    });
  }
  closeEditEmpModal() {
    this.showEditModel = false;
    this.display = 'none';
  }

  deleteEmployee(id: string) {
    this.empSer.deleteEmployee(id).subscribe({
      next: (res) => {
        this.emplyees = this.emplyees.filter((emp) => emp.empId !== id);
        this.getEmplyees();
      },
      error: (err) => {
        this.onToastErrOpenHandled();
        console.log(err);
      },
      complete: () => {
        this.onToastOpenHandled();
      },
    });
  }

  openAddEmpModal() {
    this.showAddModel = !this.showAddModel;
    this.display = 'block';
  }
  closeAddEmpModal() {
    this.showAddModel = false;
    this.display = 'none';
  }

  closeEditModal() {
    this.showEditModel = false;
    this.display = 'none';
  }

  openConfirmationModal(id: string) {
    this.showConfiramtionModel = !this.showConfiramtionModel;
    this.displayConfirmationModel = 'block';
    this.empId = id;
  }

  onToastCloseHandled() {
    this.displayToast = 'none';
  }
  onToastOpenHandled() {
    this.toastType = 'success';
    this.displayToast = 'block';
    this.toastMessage = 'Success Operation';
  }
  onToastErrOpenHandled() {
    this.toastType = 'error';
    this.displayToast = 'block';
    this.toastMessage = 'Error Operation';
  }
  onConfirmationCloseHandled() {
    this.showConfiramtionModel = false;
    this.displayConfirmationModel = 'none';
  }

  deleteCheckedEmployees() {
    this.deleteEmployee(this.empId);
    this.onConfirmationCloseHandled();
  }
  deleteALLCheckedEmployees() {
    this.emplyeesToDisplay = this.emplyees.filter((emp) => {
      return this.selectedItemsList.includes(emp.empId);
    });
    this.onConfirmationCloseHandled();
  }

  onEmplyessCheck(emplyessIds: string[]) {
    this.isEmplyessChecked = !this.isEmplyessChecked;
    if (this.isEmplyessChecked === true) {
      let isSelected = this.selectedItemsList.includes(
        emplyessIds[0] ||
          emplyessIds[1] ||
          emplyessIds[2] ||
          emplyessIds[3] ||
          emplyessIds[4] ||
          emplyessIds[5] ||
          emplyessIds[6] ||
          emplyessIds[7] ||
          emplyessIds[8] ||
          emplyessIds[9]
      );
      if (isSelected) {
        console.log('includes emp - will not addEmployee');
      } else {
        this.selectedItemsList = [...this.selectedItemsList, ...emplyessIds];
        console.log('not includes emp - addEmployee');
      }
      console.log(this.selectedItemsList);
    } else {
      this.selectedItemsList.length = 0;
      console.log(this.selectedItemsList);
    }
  }

  onEmpChange(empId: string) {
    this.empId = empId;
    if (this.selectedItemsList.includes(empId)) {
      this.selectedItemsList = this.selectedItemsList.filter(
        (emp) => emp !== empId
      );
    } else {
      this.selectedItemsList.push(empId);
    }
    console.log(this.selectedItemsList);
    if (this.selectedItemsList.length > 0) {
      this.isEmployeeChecked = true;
    } else {
      this.isEmployeeChecked = false;
    }
  }
  searchEmployee() {
    this.searchForm.controls.searchControl.valueChanges
      .pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        switchMap((searchString) => {
          console.log('search string', searchString);
          return this.empSer.searchEmployee(searchString);
        }),
        tap((res) => {
          console.log('search result', res);
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.sub$.next('');
    this.sub$.complete();
  }
}
