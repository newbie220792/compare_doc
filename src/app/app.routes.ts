import {Routes} from '@angular/router';
import {NotFound} from '../components/not-found/not-found';
import {HomeComponent} from '../components/home-component/home-component';

export const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent
  },
  {
    title: 'Not found',
    path: '**',
    pathMatch: 'full',
    component: NotFound
  }
];
