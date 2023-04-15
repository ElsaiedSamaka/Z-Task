import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form-delete',
  templateUrl: './employee-form-delete.component.html',
  styleUrls: ['./employee-form-delete.component.css'],
})
export class EmployeeFormDeleteComponent implements OnInit {
  showConfiramtionModel = false;
  displayConfirmationModel = 'none';
  empId;

  constructor() {}

  ngOnInit() {}
  openConfirmationModal(id: string) {
    this.showConfiramtionModel = !this.showConfiramtionModel;
    this.displayConfirmationModel = 'block';
    this.empId = id;
  }
  onConfirmationCloseHandled() {
    this.showConfiramtionModel = false;
    this.displayConfirmationModel = 'none';
  }
  // TODO: ADD API CALL TO DELETE EMPLOYEEs
  deleteALLCheckedEmployees(ids: string) {
    this.onConfirmationCloseHandled();
    console.log('employees have been deleted');
  }
}
