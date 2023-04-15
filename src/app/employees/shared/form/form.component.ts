import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmpolyeesService } from '../../services/employees.service';
import { uiService } from '../services/ui.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, DoCheck {
  sub$ = new Subject();

  @Input() empId!: any;
  @Input() editMode: boolean = false;
  @Output() dismiss = new EventEmitter<void>();
  @Output() addNewEmp = new EventEmitter<Employee>();

  emplyeeDetails: Employee;
  empForm: FormGroup;
  loading$;

  constructor(
    private empSer: EmpolyeesService,
    private uiSer: uiService,
    private fb: FormBuilder
  ) {
    this.initForm();
    this.loading$ = this.uiSer.loading$;
  }

  ngOnInit() {
    if (this.editMode === true) {
      this.getEmpByID(this.empId);
    }
  }
  ngDoCheck(): void {
    this.checkEditMode();
  }
  checkEditMode() {
    if (this.editMode) return;
    if (this.empId) {
      this.editMode = true;
      this.empSer
        .getEmployee(this.empId)
        .pipe(take(1))
        .subscribe((res: Employee) => {
          console.log('subscribed');
          this.empForm.controls['empName'].setValue(res.empName);
          this.empForm.controls['empEmail'].setValue(res.empEmail);
          this.empForm.controls['empPhone'].setValue(res.empPhone);
          this.empForm.controls['empAddress'].setValue(res.empAddress);
        });
    }
  }
  initForm() {
    this.empForm = this.fb.group({
      empName: [this.emplyeeDetails?.empName || '', [Validators.required]],
      empEmail: [
        this.emplyeeDetails?.empEmail || '',
        [Validators.required, Validators.email],
      ],
      empAddress: [
        this.emplyeeDetails?.empAddress || '',
        [Validators.required],
      ],
      empPhone: [
        this.emplyeeDetails?.empPhone || '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
        ],
      ],
    });
    this.empForm.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
    });
  }
  get nameControl() {
    return this.empForm.get('empName') as FormControl;
  }
  get mailControl() {
    return this.empForm.get('empEmail') as FormControl;
  }
  get addressControl() {
    return this.empForm.get('empAddress') as FormControl;
  }
  get phoneControl() {
    return this.empForm.get('empPhone') as FormControl;
  }
  showErrors() {
    const { dirty, touched, errors } = this.addressControl;
    return dirty && touched && errors;
  }
  onDismissClick() {
    this.dismiss.emit();
  }

  onSubmit() {
    if (this.empForm.invalid) return;
    const employee: Employee = {
      empName: this.empForm.controls['empName'].value,
      empEmail: this.empForm.controls['empEmail'].value,
      empPhone: this.empForm.controls['empPhone'].value,
      empAddress: this.empForm.controls['empAddress'].value,
    };
    if (this.editMode === true) {
      const updatedEmp: Employee = {
        ...employee,
        empId: this.empId,
      };

      this.empSer
        .editEmployee(updatedEmp)
        .pipe(takeUntil(this.sub$))
        .subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
          },
        });
    } else {
      this.empSer.addEmployee(employee).subscribe({
        next: (response) => {
          this.addNewEmp.emit(employee);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
          this.empForm.reset();
          this.dismiss.emit();
          window.location.reload();
        },
      });
    }
  }

  getEmpByID(id) {
    this.empSer.getEmployee(id).subscribe((res) => {
      this.emplyeeDetails = res;
      // console.log(this.emplyeeDetails);
    });
  }

  ngOnDestroy(): void {
    this.empId = '';
    this.sub$.next('');
    this.sub$.complete();
  }
}
