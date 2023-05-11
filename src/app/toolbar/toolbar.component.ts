import {Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ToolbarComponent {

  constructor(private router: Router) {
  }
  onEmployeeListButtonClicked() {
    this.router.navigate(['/employees']);
  }

  onAddEmployeeButtonClicked() {
    this.router.navigate(['/employees', 'new']);
  }
}
