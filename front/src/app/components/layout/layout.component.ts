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
  userName: String | undefined;

  constructor(private authService: AuthService, private router: Router, private loginAuthService: LoginAuthService, private storageService: StorageService) {
  }


  ngOnInit(): void {
    this.authService.getUserClaims().then((res) => {
      this.userName = res.displayName;
    });

  }

  logout(): void {
    /*this.authService.doLogout().finally(
      ()=>{this.router.navigate(['/login'])}
    )*/
    this.loginAuthService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
