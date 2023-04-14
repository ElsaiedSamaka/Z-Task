import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [EmployeeFormComponent, EmployeeListComponent],
})
export class EmployeesModule {}
