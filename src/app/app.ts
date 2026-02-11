import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('sso-app', {debugName: 'sso-app'});
  protected readonly vite: string = 'vite111';

  constructor() {
    console.log('constructor')
  }
}
