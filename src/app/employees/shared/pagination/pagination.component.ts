import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 6;
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();

  pages: number[];
  constructor() {
    // this.pages = Array.from(Array(this.totalPages).keys());
    this.pages = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
      this.currentPage + 3,
    ].filter((pageNumber) => pageNumber >= 1 && pageNumber <= this.totalPages);
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
