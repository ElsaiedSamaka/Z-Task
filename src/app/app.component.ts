import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { uiService } from './employees/shared/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Softzone';
  loading$: Observable<boolean>;
  constructor(private uiSerivce: uiService) {
    this.loading$ = this.uiSerivce.loading$;
  }
}
