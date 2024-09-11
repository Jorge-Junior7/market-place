import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResetPasswordComponent } from "../reset-password/reset-password.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ResetPasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
