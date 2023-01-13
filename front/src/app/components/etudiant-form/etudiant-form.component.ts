import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from "../../_entities/Etudiant";
import {EtudiantService} from "../../_services/etudiant.service";
import {MemberService} from "../../_services/member.service";
import {AuthService} from "../../_services/AuthService";
import {LoginAuthService} from "../../_services/login-auth.service";
import {User} from "../../_entities/User";

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.scss']
})
export class EtudiantFormComponent implements OnInit {
  form: any;
  currentID: any;
  itemGlobal: any;
  user : User = new User();

//injecter le service ds le constructure du component
  constructor(private memberService: MemberService, private etudiantService: EtudiantService, private router: Router, private ActivatedRouter: ActivatedRoute,private loginAuthService : LoginAuthService) {
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


    })

  }

  initForm1(item: Etudiant): void {
    this.form = new FormGroup({
      cin: new FormControl(item.cin),
      nom: new FormControl(item.nom),
      prenom: new FormControl(item.prenom),
      cv: new FormControl(item.cv),
      dateNaissance: new FormControl(item.dateNaissance)
    })

  }

  addEtudiant(): void {

    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    this.etudiantService.saveEtudiant(objectToSubmit).then((res) => {
      this.user.email = res.prenom;
      this.user.password = res.cin;
      this.user.idMember = res.id;

      this.loginAuthService.addUser(this.user).subscribe((userReturned)=>{
        console.log(userReturned);
      })
        this.router.navigate(['./members'])
    });

    //then : ki jeni l retour chnou bch na3mel ?

    //thread dinamou du web
    // this.instanceclassservice.methodeservice.then((eli jeni )=>{retour})
  }


}
