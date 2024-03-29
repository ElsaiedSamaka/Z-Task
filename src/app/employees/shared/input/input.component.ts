import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  @Input() type!: string;
  @Input() value: string = '';
  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
  constructor() {}

  ngOnInit() {}
}
