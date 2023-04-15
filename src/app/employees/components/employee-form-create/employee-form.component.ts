import { Component, OnInit } from '@angular/core';
import { EmpolyeesService } from '../../services/employees.service';
import { uiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  showModel = false;
  display = 'none';
  loading$;

  constructor(private empSer: EmpolyeesService, private uiSer: uiService) {
    this.loading$ = this.uiSer.loading$;
  }

  ngOnInit() {}

  onClick() {
    this.showModel = !this.showModel;
    this.display = 'block';
  }
  onCloseHandled() {
    this.showModel = !this.showModel;
    this.display = 'none';
  }
}
