import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [CommonModule, EmployeesRoutingModule],
  declarations: [EmployeeFormComponent, EmployeeListComponent],
})
export class EmployeesModule {}
