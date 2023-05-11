import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/models";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {EmployeeService} from "../service/employee.service";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Router} from "@angular/router";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DeleteEmployeeDialog} from "../delete-employee/delete-employee.dialog";
import {filter, Observable} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DeleteEmployeeDialog,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})
export class EmployeeListComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();

  constructor(private employeeService: EmployeeService, private dialog: MatDialog, private router: Router) {
  }

  onEditClicked(employee: Employee) {
    this.router.navigate(['/employees', employee.id]);
  }

  onDeleteClicked(employee: Employee) {
    this.openDialog(employee)
      .subscribe(_ => {
        this.employeeService.deleteEmployee(employee.id).subscribe();
        const index = this.dataSource.data.indexOf(employee);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      });
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(employees => {
      this.dataSource.data = employees;
      this.isLoading = false;
    })
  }

  openDialog(employee: Employee): Observable<any> {
    return this.dialog.open(DeleteEmployeeDialog, {
      data: employee,
      disableClose: true
    }).afterClosed()
      .pipe(filter(x => !!x));
  }
}
