import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {Employee} from "../model/models";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ]
})
export class ViewEmployeeComponent implements OnInit {
  employee: Employee = {id: 0, firstName: '', lastName: '', emailId: ''};

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.employee = data['employee'];
    });
  }
}
