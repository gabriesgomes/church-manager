import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3030';

  private service = 'auth';

  private headers = { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,OPTIONS' }};

  constructor(private http: HttpClient,
              private router: Router) { }

  login(userName: string, password: string) {
      const body = {userName, password};

      return this.http.post(`${this.url}/${this.service}`, body).subscribe(
        (result: any) => {
          if(result) {
            this.router.navigateByUrl(`home`);
          }
        }, (error: any) => this.router.navigateByUrl(''));
  }
}
