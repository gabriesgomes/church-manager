import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
      console.log(body);
      return this.http.post(`${this.url}/${this.service}`, body, this.headers).subscribe(
        (result: any) => {
          console.log(result);
          if(result) {
            this.router.navigateByUrl(`home`);
          }
        });
  }
}
