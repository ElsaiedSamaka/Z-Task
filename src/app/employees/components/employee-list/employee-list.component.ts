import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { EmpolyeesService } from '../../services/employees.service';
import { uiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnDestroy, DoCheck {
  sub$ = new Subject();
  display: boolean = false;
  empId = '';
  loading$;
  emplyees!: Employee[];
  constructor(private empSer: EmpolyeesService, private uiSer: uiService) {
    this.loading$ = this.uiSer.loading$;
  }
  ngDoCheck(): void {
    console.log(this.empId);
  }
  ngOnInit(): void {
    this.getEmplyees();
  }
  getEmplyees() {
    this.empSer
      .getEmployees()
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        this.emplyees = res;
        this.uiSer.loading$.next(false);
      });
  }
  ngOnDestroy(): void {
    this.sub$.next('');
    this.sub$.complete();
  }
}
