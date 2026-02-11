import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {routes} from './app.routes';
import {provideRouter} from '@angular/router';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {authenticationInterceptor} from '../interceptors/authentication-interceptor';
import {credentialsInterceptor} from '../interceptors/credentials-interceptor';

const BACKEND_URL = 'backendUrl';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'},
    provideHttpClient(withFetch(), withInterceptors([authenticationInterceptor, credentialsInterceptor]))
  ]
};
