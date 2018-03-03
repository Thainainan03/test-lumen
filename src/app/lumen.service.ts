import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LumenService {
  apiUrl = "http://localhost:8000";
  constructor(private http: Http) {
    
   }
  
  getUsers() {
    return this.http.get('http://localhost:8000/get' )
    
  }


}
