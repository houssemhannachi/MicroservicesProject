import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../_services/storage.service";
import {User} from "../../_entities/User";
import {MemberService} from "../../_services/member.service";
import {Member} from "../../_entities/Member";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user?: User;
  email: String | undefined = '';
  member:Member|undefined;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private storageService: StorageService, private memberService: MemberService) {

  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.user = this.storageService.getUser();
      this.memberService.getMemberByEmail(this.user?.email).then(res=>{
        this.member=res;
        console.log(res)
      })


    } else {
      console.log("ok")
    }
  }

}
