import { Routes } from '@angular/router';
import { LogInComponent } from './pages/auth/log-in/log-in.component';
import { SiqnUpComponent } from './pages/auth/siqn-up/siqn-up.component';
import { MainComponent } from './shared/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SiqnUpComponent
  }
];
