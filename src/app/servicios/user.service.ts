import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User2 } from '../modelos/user2';
import { Menu } from '../modelos/menu';


@Injectable()
export class UserService {

    private heroesUrl1 = 'http://127.0.0.1:9091/wsIf/login';
    //public token: string;

    constructor(private http: Http) { }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.heroesUrl1, { usrid: username, usuario: password })
            .map((response: Response) => {
                console.log(response.json());
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;

                //let key = true;
                //let body = response.json();
                //var results =   body.success.data;
                //var num: number = results.length;
                
                let var1 = 'admin';
                let var2 = 'admin123';
                if (var1 === username && var2 === password) {
                    // return true to indicate successful login
                    //localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log ('extractData: ');
        console.log(body.success.data);
        return body.success.data;
    }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 
}