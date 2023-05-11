import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {Employee} from "../model/models";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UpdateEmployeeComponent implements OnInit {
  newEmployeeForm: FormGroup;
  employee: Employee = {id: 0, firstName: '', lastName: '', emailId: ''};

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {
    this.newEmployeeForm = new FormGroup({
      firstNameFormControl: new FormControl('', [Validators.required]),
      lastNameFormControl: new FormControl('', [Validators.required]),
      emailFormControl: new FormControl('', [Validators.required, Validators.email])
    });
  };

  get firstName() { return this.newEmployeeForm.get('firstNameFormControl'); }
  get lastName() { return this.newEmployeeForm.get('lastNameFormControl'); }
  get email() { return this.newEmployeeForm.get('emailFormControl'); }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.employee = data['employee'];

      this.newEmployeeForm.patchValue({
        firstNameFormControl: this.employee.firstName,
        lastNameFormControl: this.employee.lastName,
        emailFormControl: this.employee.emailId
      });
    });
  }

  onFormSubmit() {
    const employee: Employee = {
      id: this.employee.id,
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      emailId: this.email?.value
    }

    this.employeeService.updateEmployee(employee).subscribe(_ => {
      this.router.navigate(['/employees']);
    });
  }
}
