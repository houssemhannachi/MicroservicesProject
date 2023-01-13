import {Member} from '../../_entities/Member';
import {MemberService} from '../../_services/member.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentID: any;
  itemGlobal: any;

//injecter le service ds le constructure du component
  constructor(private MemberService: MemberService, private router: Router, private ActivatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    //recuperer l element a partir du url
    this.currentID = this.ActivatedRouter.snapshot.params.id;
    console.log(this.currentID);
    if (!!this.currentID) {
      this.MemberService.getMemberByid(this.currentID).then(item => {
        console.log(item)
        this.itemGlobal = item;
        this.initForm1(this.itemGlobal);
      })
    } else {
      this.initForm();
    }

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
      grade: new FormControl(item.grade),


    })

  }

  ONSUB(): void {

    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    this.MemberService.saveMember(objectToSubmit).then(() => {
      this.router.navigate(['./members'])
    });
    //then : ki jeni l retour chnou bch na3mel ?

    //thread dinamou du web
    // this.instanceclassservice.methodeservice.then((eli jeni )=>{retour})
  }


}
