import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/models";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();

  constructor(private employeeService: EmployeeService) {
  }
  onEditClicked(row: Employee) {
    console.log(row);
  }

  onDeleteClicked(row: Employee) {
    console.log(row);
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(employees => {
      this.dataSource.data = employees;
    })
  }
}

const EMPLOYEE_DATA: Employee[] = [
  {id: 1, firstName: 'Ivan', lastName: 'Ivanov', emailId: 'ivanov@gmail.com'},
  {id: 2, firstName: 'Oskar', lastName: 'Oskarov', emailId: 'oskarov@gmail.com'},
  {id: 3, firstName: 'Oleg', lastName: 'Olegov', emailId: 'olegov@gmail.com'},
  {id: 4, firstName: 'Tatyana', lastName: 'Tanushina', emailId: 'tanushina@gmail.com'}
];
