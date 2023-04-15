import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit() {}
}
