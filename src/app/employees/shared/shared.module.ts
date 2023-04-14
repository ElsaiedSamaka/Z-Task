import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingSpinnerComponent } from './views/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinnerComponent, PaginationComponent],
  exports: [LoadingSpinnerComponent, PaginationComponent],
})
export class SharedModule {}
