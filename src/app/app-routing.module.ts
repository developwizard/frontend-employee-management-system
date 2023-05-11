import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {UpdateEmployeeResolver} from "./update-employee/update-employee.resolver";

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/new', component: CreateEmployeeComponent},
  {path: 'employees/:id', component: UpdateEmployeeComponent, resolve: {employee: UpdateEmployeeResolver}},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
