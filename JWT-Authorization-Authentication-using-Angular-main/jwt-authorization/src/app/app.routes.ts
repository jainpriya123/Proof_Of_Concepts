import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
    {
        path: "login", 
        component: LoginComponent
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [authGuard]
    }
];
