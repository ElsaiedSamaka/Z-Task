import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmpolyeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  showModel = false;
  display = 'none';
  empForm!: FormGroup;
  constructor(private empSer: EmpolyeesService) {}

  ngOnInit() {
    this.empForm = new FormGroup({
      empName: new FormControl('', [Validators.required]),
      empEmail: new FormControl('', [Validators.required, Validators.email]),
      empAddress: new FormControl('', [Validators.required]),
      empPhone: new FormControl('', [
        Validators.required,
        Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),
      ]),
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
  onClick() {
    this.showModel = !this.showModel;
    this.display = 'block';
  }
  onCloseHandled() {
    this.showModel = !this.showModel;
    this.display = 'none';
  }
  onSubmit() {
    if (this.empForm.invalid) return;

    const employee: Employee = {
      empName: this.empForm.controls['empName'].value,
      empEmail: this.empForm.controls['empEmail'].value,
      empPhone: this.empForm.controls['empPhone'].value,
      empAddress: this.empForm.controls['empAddress'].value,
    };
    this.empSer.addEmployee(employee).subscribe({
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
    console.log(this.empForm.value);
    this.empForm.reset();
    this.onCloseHandled();
  }
}
