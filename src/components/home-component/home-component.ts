import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  protected readonly title: string = 'HomeComponent';

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loadData();
  }
}
