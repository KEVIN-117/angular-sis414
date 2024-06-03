import { Component } from '@angular/core';
import {UserSchema} from "../../../../types";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {

  protected userInstance: UserSchema | null = null;



  ngOnInit() {
    this.userInstance = new UserSchema('alguien@example.com', 'Alguien', 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2FCiberamenazas%20y%20Tendencias%202019%20»%20Un%20mundo%20complejo.jpg?alt=media&token=695a38fc-f671-4639-8890-a6afbe7a1b97', true, '123456789', 'google.com')
  }
}
