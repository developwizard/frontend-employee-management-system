import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {Employee} from "../model/models";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'delete-employee-dialog',
  templateUrl: 'delete-employee.dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class DeleteEmployeeDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee) {
  }
}
