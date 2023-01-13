import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";
import {User} from "../_entities/User";

const API_URL = '/server/AUTH-SERVICE/';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private httpClient: HttpClient) {
  }
  addUser(user : User):Observable<any>{
      return this.httpClient.post(API_URL + "users",user);
  }

  login(email: string, password: string): Observable<any> {
    var formData: any = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    return this.httpClient.post(
      API_URL + 'login', formData
    );
  }
  logout(): Observable<any> {
    return this.httpClient.post(API_URL + 'signout', {}, httpOptions);
  }
}
