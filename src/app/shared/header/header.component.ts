import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavItemComponent } from '../components/nav-item/nav-item.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems: {
    title: string;
    path: string;
  }[] = [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Login',
        path: '/login'
      },
      {
        title: 'Sign Up',
        path: '/sign-up'
      },
      {
        title: 'Profile',
        path: '/profile'
      }

    ]
}
