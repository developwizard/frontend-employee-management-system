import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {GetEmployeeResolver} from "./resolver/get-employee.resolver";
import {ViewEmployeeComponent} from "./view-employee/view-employee.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/new', component: CreateEmployeeComponent},
  {path: 'employees/update/:id', component: UpdateEmployeeComponent, resolve: {employee: GetEmployeeResolver}},
  {path: 'employees/:id', component: ViewEmployeeComponent, resolve: {employee: GetEmployeeResolver}},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
