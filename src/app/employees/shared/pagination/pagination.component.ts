import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpolyeesService } from '../../services/employees.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 0;
  totalPages: number = 0;
  totalItems: number = 0;
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();

  pages: number[];
  constructor(private empSer: EmpolyeesService) {
    this.empSer.getEmployees$.subscribe((res) => {
      this.totalPages = Math.ceil(res.length / 10);
      this.totalItems = res.length;
      this.pages = this.getPages(this.currentPage, this.totalPages);
    });
  }

  ngOnInit() {}

  public onGoTo(page: number): void {
    console.log(`Page changed to ${page}`);
    this.goTo.emit(page);
  }
  public onNext(): void {
    console.log('Next page', this.currentPage);
    console.log(this.pages);
    this.next.emit(this.currentPage);
  }
  public onPrevious(): void {
    console.log('Previous page');
    this.previous.emit(this.currentPage);
  }
  getPages(current: number, total: number): number[] {
    if (total <= 7) {
      console.log('total <= 7');
      return Array.from(Array(total).keys()).map((x) => ++x);
    }

    if (current > 5) {
      console.log('current > 5');
      if (current >= total - 4) {
        console.log('current >= total - 4');
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total];
      } else {
        console.log('current < total - 4');
        return [1, -1, current - 1, current, current + 1, -1, total];
      }
    }
    console.log('current < 5');
    return [1, 2, 3, 4, 5, -1, total];
  }
}
