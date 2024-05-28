import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LogInComponent} from "./pages/auth/log-in/log-in.component";
import {SiqnUpComponent} from "./pages/auth/siqn-up/siqn-up.component";
import {HomeComponent} from "./pages/home/home.component";
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    LogInComponent,
    SiqnUpComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sis-414-curso';

}
