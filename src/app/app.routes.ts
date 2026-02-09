import {Routes} from '@angular/router';
import {App} from './app';
import {NotFound} from '../components/commons/not-found/not-found';

export const routes: Routes = [
  {
    title: 'Home',
    path: '/',
    component: App,
    // canActivate: [authGuardFn]
  },
  {
    title: 'Not found',
    path: '/222',
    component: NotFound
  },
  {
    title: 'Not found',
    path: '',
    pathMatch: 'full',
    component: NotFound
  }
];
