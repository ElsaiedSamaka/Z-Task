import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './views/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent],
})
export class SharedModule {}
