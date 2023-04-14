import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
  emplyees!: any[];
  emplyeesToDisplay: any[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;
  constructor(private empSer: EmpolyeesService, private uiSer: uiService) {
    this.getEmplyees();
    this.loading$ = this.uiSer.loading$;
  }
  ngDoCheck(): void {
    console.log(this.empId);
  }
  ngOnInit(): void {}

  public onGoTo(page: number): void {
    this.currentPage = page;
    this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
  }
  public onNext(page: number): void {
    if (this.currentPage === this.totalPages) return;
    if (this.currentPage < this.totalPages) {
      // this.currentPage = page + 1;
      this.currentPage++;
      console.log(this.currentPage);
      this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
    }
  }
  public onPrevious(page: number): void {
    if (this.currentPage === 1) return;
    if (this.currentPage > 1) {
      // this.currentPage = page - 1;
      this.currentPage--;
      console.log(this.currentPage);
      this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
    }
  }
  public paginate(current: number, perPage: number): string[] {
    return [...this.emplyees.slice((current - 1) * perPage).slice(0, perPage)];
  }
  getEmplyees() {
    this.empSer
      .getEmployees()
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        this.emplyees = res;
        this.totalPages = Math.ceil(res.length / 10);
        this.emplyeesToDisplay = this.paginate(this.currentPage, this.perPage);
        this.uiSer.loading$.next(false);
      });
  }
  ngOnDestroy(): void {
    this.sub$.next('');
    this.sub$.complete();
  }
}
