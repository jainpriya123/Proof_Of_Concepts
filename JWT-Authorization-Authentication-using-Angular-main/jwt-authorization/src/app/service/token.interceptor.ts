import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  let myToken;
  
  if (typeof window !== 'undefined'){
    myToken = localStorage.getItem('token');
  } 
  if(myToken){
    req = req.clone({
      setHeaders:{
        Authorization:  `Bearer ${myToken}`
      }
    })
    // debugger;
  }
  return next(req);
};
