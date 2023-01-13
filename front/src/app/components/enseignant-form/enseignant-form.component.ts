import {Member} from '../../_entities/Member';
import {MemberService} from '../../_services/member.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EnseignantChercheurService} from "../../_services/enseignant-chercheur.service";
import {EnseignantChercheur} from "../../_entities/EnseignantChercheur";

@Component({
  selector: 'app-enseignant-form',
  templateUrl: './enseignant-form.component.html',
  styleUrls: ['./enseignant-form.component.scss']
})
export class EnseignantFormComponent implements OnInit {
  form: any;
  currentID: any;
  itemGlobal: any;

//injecter le service ds le constructure du component
  constructor(private memberService:MemberService,private enseignantService: EnseignantChercheurService, private router: Router, private ActivatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentID=this.ActivatedRouter.snapshot.params.id ;
    //console.log(this.currentID);
    //recuper l element a partir de lid
    // si la variable existe o 3andha valeur truly
    if(!!this.currentID){

      this.memberService.getMemberByid(this.currentID).then(item=>{
        this.itemGlobal =item ;
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
      grade:new FormControl(null,[Validators.required])

    })

  }

  initForm1(item: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(item.cin),
      nom: new FormControl(item.nom),
      cv: new FormControl(item.cv),
      prenom: new FormControl(item.prenom),
      grade:new FormControl(item.grade),


    })

  }

  ONSUB(): void {

    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    this.enseignantService.saveEnseignant(objectToSubmit).then(() => {
      this.router.navigate(['./members'])
    });
    //then : ki jeni l retour chnou bch na3mel ?

    //thread dinamou du web
    // this.instanceclassservice.methodeservice.then((eli jeni )=>{retour})
  }


}
