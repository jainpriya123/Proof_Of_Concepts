import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  

  const router = inject(Router);

  let myToken;
  
  if (typeof window !== 'undefined'){
    myToken = localStorage.getItem('token');
  }

  if(myToken!= null){
    return true;
  }
  else{
    debugger;
    router.navigate(['/login'])
    return false;
  }
  
};
