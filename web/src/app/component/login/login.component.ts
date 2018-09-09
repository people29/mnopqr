import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({ username: '', password: '' });
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(() => {
      this.router.navigate(['/user']);
    }, err =>{
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  logout() {
    this.auth.logout();
  }

}
