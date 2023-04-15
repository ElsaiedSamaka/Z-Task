import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpolyeesService } from '../../services/employees.service';
import { uiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  showModel = false;
  display = 'none';
  empForm!: FormGroup;
  loading$;

  constructor(private empSer: EmpolyeesService, private uiSer: uiService) {
    this.loading$ = this.uiSer.loading$;
  }

  ngOnInit() {
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
}
