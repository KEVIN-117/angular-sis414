import {Component, inject} from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {ContainerComponent} from "../components/container/container.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormDto, UserDto} from "../../../../types";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-siqn-up',
  standalone: true,
  imports: [
    ButtonsComponent,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './siqn-up.component.html',
  styleUrl: './siqn-up.component.css'
})
export default class SiqnUpComponent {
  private readonly authService: AuthService = inject(AuthService)
  private readonly router = inject(Router)

  protected formControl;
  constructor() {
    this.formControl = new FormGroup<FormDto>({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ])
    })
  }

  async onSubmit() {
    try {
      const values = this.formControl.value;
      const credentials = {
        email: values.email,
        password: values.password,
        name: values.name,
        lastName: values.lastName
      } as UserDto

      const res = await this.authService.register(credentials)
      if (res){
        await this.router.navigateByUrl('/dashboard')
      }
    }catch (e){
      if (e instanceof Error){
        console.error(e.message)
      }
      alert('An error occurred, please try again later')
    }
  }
}
