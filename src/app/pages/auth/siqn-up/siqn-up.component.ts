import { Component } from '@angular/core';
import {ButtonsComponent} from "../components/buttons/buttons.component";
import {ContainerComponent} from "../components/container/container.component";

@Component({
  selector: 'app-siqn-up',
  standalone: true,
  imports: [
    ButtonsComponent,
    ContainerComponent
  ],
  templateUrl: './siqn-up.component.html',
  styleUrl: './siqn-up.component.css'
})
export class SiqnUpComponent {

}
