import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {mergeApplicationConfig} from '@angular/core';
import {App} from './app/app';

(async (): Promise<void> => {
  try {
    const appRootConfig = mergeApplicationConfig(appConfig);
    await bootstrapApplication(App, appRootConfig);
  } catch (error) {
    console.error(error);
  }
})();
