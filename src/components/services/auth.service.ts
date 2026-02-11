import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface User {
  name: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private readonly http: HttpClient) {
  }

  loadData() {
    return this.http.get<User>('/api/users').subscribe({
      next(value) {
        console.log('Adding: ' + value);
        return value;
      },
      error(err) {
        throw new Error('Error' + err);
      },
      complete() {
        console.log('Sum equals: ');
      }
    });
  }
}
