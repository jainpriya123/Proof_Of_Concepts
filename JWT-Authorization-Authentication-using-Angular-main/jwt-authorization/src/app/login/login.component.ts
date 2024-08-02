import { Component, NgModule, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  // form:FormGroup;

  constructor(private authService: AuthService, 
              private router: Router) {
  }
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }

  userlogin(data : any) {
    // const val = this.form.value;
    console.warn(data);
    let loginData = data;
      this.authService.login(loginData).subscribe((response: any) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token',response.token);
        }
          console.log(response);
          // debugger;
            this.router.navigate(['/profile']);
      }), ((error: any)=>{
        console.log(error);
      });
}
  
}
