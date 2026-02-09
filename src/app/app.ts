import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sso-app', {debugName: 'sso-app'});
  vite: string = 'vite111';

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('init')
  }

  ngAfterViewInit() {
    console.log('afterViewInit')
  }

  ngOnDestroy() {
    console.log('destroy')
  }

  onSelect(event: any) {
    console.log('onSelect', event)
  }

  fetchEvent(event: any) {
    console.log('fetchEvent', event)
    return new Array(10).fill(0).map((v, i) => i).join(',');
  }
}
