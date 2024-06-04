import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, authState} from "@angular/fire/auth";
import {Credentials, UserDto} from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authService: Auth = inject(Auth)

  readonly authState  = authState(this.authService)
  constructor() { }

  singIn(credentials: Credentials) {
    return signInWithEmailAndPassword(this.authService, credentials.email, credentials.password);
  }


  register(credentials: UserDto){
    const data = {
      email: credentials.email,
      password: credentials.password
    } as Credentials
    return createUserWithEmailAndPassword(this.authService, credentials.email, credentials.password)
  }
  logOut(){
    return this.authService.signOut()
  }
}
