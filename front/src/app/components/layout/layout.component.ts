import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/_services/AuthService';
import {LoginAuthService} from "../../_services/login-auth.service";
import {StorageService} from "../../_services/storage.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userName: String | undefined = '';
  user?: any;
  loggedIn?: any = false;

  constructor(private authService: AuthService, private router: Router, private loginAuthService: LoginAuthService, private storageService: StorageService) {
  }


  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.user = this.storageService.getUser();
      this.loggedIn = true
    }


  }

  logout(): void {

    this.loginAuthService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.reloadPage();
      },
      error: err => {
        console.log(err);
      }
    })

  }

  reloadPage(): void {
    window.location.reload();
  }

}
