import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class uiService {
  // TODO: initial value should be true
  loading$ = new BehaviorSubject(true);
  constructor() {}
}
