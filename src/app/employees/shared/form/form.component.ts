import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmpolyeesService } from '../../services/employees.service';
import { uiService } from '../services/ui.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() empId!: any;
  @Input() editMode: boolean = false;
  @Output() dismiss = new EventEmitter<void>();

  emplyeeDetails: Employee;
  empForm!: FormGroup;
  loading$;

  constructor(private empSer: EmpolyeesService, private uiSer: uiService) {
    this.loading$ = this.uiSer.loading$;
  }

  ngOnInit() {
    if (this.editMode === true) {
      this.getEmpByID(this.empId);
      this.empForm = new FormGroup({
        empName: new FormControl(this.emplyeeDetails?.empName, [
          Validators.required,
        ]),
        empEmail: new FormControl('', [Validators.required, Validators.email]),
        empAddress: new FormControl('', [Validators.required]),
        empPhone: new FormControl('', [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
        ]),
      });
    } else {
      this.empForm = new FormGroup({
        empName: new FormControl('', [Validators.required]),
        empEmail: new FormControl('', [Validators.required, Validators.email]),
        empAddress: new FormControl('', [Validators.required]),
        empPhone: new FormControl('', [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
        ]),
      });
    }
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
    const detailedEmp: Employee = { ...this.emplyeeDetails, empId: this.empId };
    // if (this.editMode === true) {
    //   // const updatedEmp: Employee = {
    //   //   ...detailedEmp,
    //   //   empName: this.empForm.setValue(this.empForm.controls['empName'].value),
    //   //   empEmail: employee?.empEmail,
    //   //   empPhone: employee?.empPhone,
    //   //   empAddress: employee?.empAddress,
    //   // };

    //   this.empSer.editEmployee(detailedEmp).subscribe({
    //     next: (response) => {
    //       console.log(response);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('complete');
    //     },
    //   });
    // } else {
    this.empSer.addEmployee(employee).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.empForm.reset();
        this.dismiss.emit();
      },
    });
    // }
  }
  getEmpByID(id) {
    this.empSer.getEmployee(id).subscribe((res) => {
      this.emplyeeDetails = res;
    });
  }
}
