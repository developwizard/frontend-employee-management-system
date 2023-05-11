import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {Employee} from "../model/models";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class CreateEmployeeComponent {
  newEmployeeForm: FormGroup

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.newEmployeeForm = new FormGroup({
      firstNameFormControl: new FormControl('', [Validators.required]),
      lastNameFormControl: new FormControl('', [Validators.required]),
      emailFormControl: new FormControl('', [Validators.required, Validators.email])
    });
  };

  get firstName() { return this.newEmployeeForm.get('firstNameFormControl'); }
  get lastName() { return this.newEmployeeForm.get('lastNameFormControl'); }
  get email() { return this.newEmployeeForm.get('emailFormControl'); }

  onFormSubmit() {
    console.log(this.newEmployeeForm.value);
    const employee: Employee = {
      id: 0,
      firstName: this.firstName?.value,
      lastName: this.lastName?.value,
      emailId: this.email?.value
    }

    this.employeeService.addEmployee(employee).subscribe(_ => {
      this.router.navigate(['/employees']);
    });
  }
}
