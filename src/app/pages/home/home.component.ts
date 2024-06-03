import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component"

import { FooterComponent } from "../../shared/footer/footer.component"
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
