import {Component, OnInit} from '@angular/core';
import {LoginAuthService} from "../../_services/login-auth.service";
import {StorageService} from "../../_services/storage.service";

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.scss']
})
export class LoginAuthComponent implements OnInit {
  hide = true;
  isLoggedIn: any;
  form: any = {
    email: null,
    password: null
  };
  role: any;

  constructor(private loginAuthServie: LoginAuthService, private storageService: StorageService) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const {email, password} = this.form;
    this.loginAuthServie.login(email, password).subscribe({
      next: data => {
        if(data!=null) {
          this.storageService.saveUser(data);
          this.isLoggedIn = true;
          this.role = this.storageService.getUser();
        }
        else {
          console.log("bad credentials")
        }
      },
    })
    console.log(this.storageService.isLoggedIn())
  }

}
