import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 login:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private _http: HttpClient) { }

  setAuthentication(val:boolean){
    this.login.next(val);
  }
  authenticate(){
    debugger
    return this.login.asObservable();
  }
}
