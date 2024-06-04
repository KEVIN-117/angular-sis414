import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {map} from "rxjs";

const authState$ = ()=> inject(AuthService).authState
const router$ = ()=> inject(Router)

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = router$();
  return  authState$().pipe(
    map(user =>{
      if (!user){
        router.navigateByUrl('/auth/log-in').then()
        return false;
      }
      return true;
    })
  )
};

export const publicGuardGuard: CanActivateFn = (route, state) => {
  const router = router$();
  return authState$().pipe(
    map(user => {
      if (user){
        router.navigateByUrl('/dashboard').then()
        return false;
      }
      return true;
    })
  );
}
