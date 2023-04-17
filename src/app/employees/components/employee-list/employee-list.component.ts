import {
  Component,
  DoCheck,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
  showModel = false;
  showConfiramtionModel = false;
  display = 'none';
  displayConfirmationModel = 'none';
  editMode = false;
  isEmplyessChecked = false;
  isEmployeeChecked = false;
  empId;
  emplyessIds;
  selectedItemsList = [];
  loading$;
  displayToast = 'none';
  emplyees!: Employee[];
  emplyeesToDisplay: Employee[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;
  constructor(private empSer: EmpolyeesService, private uiSer: uiService) {
    this.getEmplyees();
    this.loading$ = this.uiSer.loading$;
  }

  ngDoCheck(): void {
    this.emplyessIds = this.emplyeesToDisplay.map((emp) => emp.empId);
  }

  ngOnInit(): void {
    this.empSer.getEmployees$.subscribe((res) => {
      this.emplyees = res;
    });
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

  deleteEmployee(id: string) {
    this.empSer.deleteEmployee(id).subscribe({
      next: (res) => {
        this.emplyees = this.emplyees.filter((emp) => emp.empId !== id);
        this.getEmplyees();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.onToastOpenHandled();
      },
    });
  }
  addEmployee(emp: Employee) {
    this.empSer.getEmployees().subscribe({
      next: (res) => {
        this.emplyees = res;
        this.emplyees.push(emp);
        this.getEmplyees();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  openEditModal(id: string) {
    this.showModel = !this.showModel;
    this.display = 'block';
    this.empId = id;
    this.editMode = true;
  }

  onCloseHandled() {
    this.showModel = false;
    this.display = 'none';
    this.editMode = false;
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
    this.displayToast = 'block';
  }
  onConfirmationCloseHandled() {
    this.showConfiramtionModel = false;
    this.displayConfirmationModel = 'none';
  }

  deleteCheckedEmployees() {
    this.deleteEmployee(this.empId);
    this.onConfirmationCloseHandled();
  }
  deleteALLCheckedEmployees(ids: string[]) {
    this.emplyeesToDisplay.length = 0;
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
    if (this.selectedItemsList.includes(empId)) {
      this.selectedItemsList = this.selectedItemsList.filter(
        (emp) => emp !== empId
      );
    } else {
      this.selectedItemsList.push(empId);
    }
    console.log(this.selectedItemsList);
  }

  ngOnDestroy(): void {
    this.sub$.next('');
    this.sub$.complete();
  }
}
// to show a confirmation model on delete employee button click
// we will have to have a property showConfirmationModal: boolean = false;
// and displayConfirmationModal = 'none'
// and on delete button click we will set showConfirmationModal = true;
// and displayConfirmationModal = 'block';
// and on cancel button click we will set showConfirmationModal = false;
// and displayConfirmationModal = 'none';
// and on confirm button click we will set showConfirmationModal = false;
// and displayConfirmationModal = 'none';
// and call deleteEmployee(id: string) method
// and on deleteEmployee(id: string) method we will call getEmployees() method
// and on getEmployees() method we will set showConfirmationModal = false;
// and displayConfirmationModal = 'none';
