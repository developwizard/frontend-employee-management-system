import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Employee} from "../model/models";
import {EmployeeService} from "../service/employee.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeResolver implements Resolve<Employee> {

  constructor(private employeeService: EmployeeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee> | Promise<Employee> | Employee  {
    return this.employeeService.getEmployeeById(route.params['id']);
  }
}
