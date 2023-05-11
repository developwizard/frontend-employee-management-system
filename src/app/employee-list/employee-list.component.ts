import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/models";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {EmployeeService} from "../service/employee.service";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})
export class EmployeeListComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();

  constructor(private employeeService: EmployeeService) {
  }

  onEditClicked(row: Employee) {
    console.log(row);
  }

  onDeleteClicked(row: Employee) {
    console.log(row);
    // this.employeeService.deleteEmployee(row.id)
    const index = this.dataSource.data.indexOf(row);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(employees => {
      this.dataSource.data = employees;
      this.isLoading = false;
    })
  }
}
