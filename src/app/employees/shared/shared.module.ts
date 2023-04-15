import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SortDirective } from 'src/app/directive/sort.directive';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ModelComponent } from './model/model.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SortComponent } from './sort/sort.component';
import { LoadingSpinnerComponent } from './views/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    LoadingSpinnerComponent,
    PaginationComponent,
    ModelComponent,
    InputComponent,
    FormComponent,
    SortComponent,
    SortDirective,
  ],
  exports: [
    LoadingSpinnerComponent,
    PaginationComponent,
    ModelComponent,
    InputComponent,
    FormComponent,
  ],
})
export class SharedModule {}
