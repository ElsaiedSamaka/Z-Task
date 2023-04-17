import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpolyeesService } from '../../services/employees.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
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
      this.pages = Array.from(Array(this.totalPages).keys()).filter(
        (pageNumber) => pageNumber >= 1 && pageNumber <= this.totalPages
      );
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
}
