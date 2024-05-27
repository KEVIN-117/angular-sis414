import { Component } from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {RouterLink} from "@angular/router";
import {ContainerComponent} from "../components/container/container.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    ButtonsComponent,
    RouterLink,
    ContainerComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
