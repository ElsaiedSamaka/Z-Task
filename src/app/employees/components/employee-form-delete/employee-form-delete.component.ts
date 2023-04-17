import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form-delete',
  templateUrl: './employee-form-delete.component.html',
  styleUrls: ['./employee-form-delete.component.css'],
})
export class EmployeeFormDeleteComponent implements OnInit {
  showConfiramtionModel = false;
  displayConfirmationModel = 'none';
  empIds;
  @Input() isEmplyessChecked: boolean;
  @Input() isEmployeeChecked: boolean;
  constructor() {}

  ngOnInit() {}

  openConfirmationModal(ids: any[]) {
    this.showConfiramtionModel = !this.showConfiramtionModel;
    this.displayConfirmationModel = 'block';
    this.empIds = ids;
  }
  onConfirmationCloseHandled() {
    this.showConfiramtionModel = false;
    this.displayConfirmationModel = 'none';
  }

  // TODO: ADD API CALL TO DELETE EMPLOYEEs
  deleteALLCheckedEmployees() {
    this.onConfirmationCloseHandled();
    console.log('employees have been deleted');
  }
}
