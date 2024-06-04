import {Component, inject} from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {Router, RouterLink} from "@angular/router";
import {ContainerComponent} from "../components/container/container.component";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms"
import {Credentials} from "../../../../types";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    ButtonsComponent,
    RouterLink,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export default class LogInComponent {
  private readonly authService: AuthService = inject(AuthService)
  private readonly router = inject(Router)
  formControl = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ])
  })

  async onSubmit() {
    try {
      const res = await this.authService.singIn(this.formControl.value as Credentials)
      if (res){
        alert(`Welcome ${res.user.email}`)
        await this.router.navigateByUrl('/dashboard')
      }
    }catch (e){
      console.log(e)
    }
  }
}
