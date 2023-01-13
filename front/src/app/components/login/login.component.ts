import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/AuthService';
import {NgZone} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,private router:Router, private ngZone:NgZone) { }

  ngOnInit(): void {
  }

  google() : void {
    this.authService.doGoogleLogin()
    .then(() => {
      this.authService.getUserClaims();
    this.succesRedirect()})
    .catch((error)=>console.log('erreur'));

  }

  succesRedirect():void {
    this.ngZone.run(()=>{
      this.router.navigate(['/members'])
    })
  }

}
