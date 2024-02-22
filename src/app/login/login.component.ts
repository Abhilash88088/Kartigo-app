import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;


  constructor(private router: Router) {}

  login() {
    //navigate to the next page
    this.router.navigate(['/logo'], { queryParams: { email: this.email } });
  }
}