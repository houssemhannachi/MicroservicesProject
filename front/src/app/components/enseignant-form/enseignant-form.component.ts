import {Member} from '../../_entities/Member';
import {MemberService} from '../../_services/member.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EnseignantChercheurService} from "../../_services/enseignant-chercheur.service";
import {LoginAuthService} from "../../_services/login-auth.service";
import {User} from "../../_entities/User";

@Component({
  selector: 'app-enseignant-form',
  templateUrl: './enseignant-form.component.html',
  styleUrls: ['./enseignant-form.component.scss']
})
export class EnseignantFormComponent implements OnInit {
  form: any;
  currentID: any;
  itemGlobal: any;
  user : User = new User();
//injecter le service ds le constructure du component
  constructor(private loginAuthService:LoginAuthService,private memberService: MemberService, private enseignantService: EnseignantChercheurService, private router: Router, private ActivatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentID = this.ActivatedRouter.snapshot.params.id;
    if (!!this.currentID) {

      this.memberService.getMemberByid(this.currentID).then(item => {
        this.itemGlobal = item;
        console.log(item)
        this.initForm1(item);
      })
    }
    this.initForm()
  }

  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      prenom: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      etablissement: new FormControl(null, [Validators.required]),

    })

  }

  initForm1(item: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(item.cin),
      nom: new FormControl(item.nom),
      cv: new FormControl(item.cv),
      email: new FormControl(item.email),
      prenom: new FormControl(item.prenom),
      grade: new FormControl(item.grade),
      etablissement: new FormControl(item.etablissement),
      dateNaissance: new FormControl(item.dateNaissance)


    })

  }

  ONSUB(): void {

    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    this.enseignantService.saveEnseignant(objectToSubmit).then((res) => {
      this.user.email = res.email;
      this.user.password = res.cin;
      this.user.idMember = res.id;
      if(this.itemGlobal==null){
      this.loginAuthService.addUser(this.user).subscribe((userReturned)=>{
        console.log(userReturned);
      })}
      this.router.navigate(['./members'])
    });

  }


}
