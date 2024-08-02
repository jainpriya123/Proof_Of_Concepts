import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private authService: AuthService,
                private router: Router){}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    // debugger;
    this.authService.getProfile().subscribe((res)=>{
      console.log(res.message);
    }),  ((error: any)=>{
      console.log("Error is : ", error);
    });
  }
}

