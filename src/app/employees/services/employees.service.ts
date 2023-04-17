import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmpolyeesService {
  employes$ = new BehaviorSubject<any>([]);
  getEmployees$ = this.employes$.asObservable();

  // Employee_API = environment.apiUrl + 'Employees';
  Employee_API = 'http://task.soft-zone.net/api/Employees';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(`${this.Employee_API}/getAllEmployees`)
      .pipe(
        tap((employees: []) => {
          this.employes$.next(employees);
        })
      );
  }
  getEmployee(id: string) {
    return this.http.get(`${this.Employee_API}/getEmpByID/${id}`);
  }
  deleteEmployee(id: string) {
    return this.http.get(`${this.Employee_API}/deleteEmpByID/${id}`);
  }
  addEmployee(emp: Employee) {
    return this.http.post(`${this.Employee_API}/addEmployee`, emp);
  }
  editEmployee(emp: Employee) {
    return this.http.post(`${this.Employee_API}/editEmployee`, emp);
  }
}
