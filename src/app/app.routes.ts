import { Routes } from '@angular/router';
import { MainComponent }  from './pages/dashboard/main/main.component';
import {HomeComponent} from "./pages/home/home.component";
import { publicGuardGuard, authGuardGuard } from "./core/guards/auth-guard.guard"

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('./shared/main/main.component')
      },
      {
        path: 'gallery',
        loadComponent: ()=> import('./pages/gallery/gallery.component')
      },
      {
        path: 'auth',
        canActivate: [publicGuardGuard],
        children: [
          {
            path: 'log-in',
            loadComponent: ()=> import('./pages/auth/log-in/log-in.component')
          },
          {
            path: 'sign-up',
            loadComponent: ()=> import('./pages/auth/siqn-up/siqn-up.component')
          }
        ]
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuardGuard],
    loadComponent: ()=> import('./pages/dashboard/dashboard.component'),
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'storage',
        loadComponent: ()=> import('./pages/dashboard/storage/storage.component')
      },
      {
        path: 'profile',
        loadComponent: ()=> import('./pages/dashboard/profile/profile.component')
      },
      {
        path: 'settings',
        loadComponent: ()=> import('./pages/dashboard/settings/settings.component')
      },
      {
        path: 'gallery',
        loadComponent: ()=> import('./pages/gallery/gallery.component')
      },
    ],

  },
];
