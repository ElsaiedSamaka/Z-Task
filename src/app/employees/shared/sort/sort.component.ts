import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  @Input('') isDesc = true;
  @Output() sortTypeChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
  toggle() {
    this.isDesc = !this.isDesc;
    this.sortTypeChange.emit(this.isDesc);
  }
}
