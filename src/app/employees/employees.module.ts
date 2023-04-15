import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SortDirective } from '../directive/sort.directive';
import { EmployeeFormComponent } from './components/employee-form-create/employee-form.component';
import { EmployeeFormDeleteComponent } from './components/employee-form-delete/employee-form-delete.component';
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
  declarations: [
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeFormDeleteComponent,
    SortDirective
  ],
})
export class EmployeesModule {}
