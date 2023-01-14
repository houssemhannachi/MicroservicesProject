import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../_services/member.service";
import {Member} from "../../_entities/Member";
import {FormControl, FormGroup} from "@angular/forms";
import {StorageService} from "../../_services/storage.service";
import {EtudiantService} from "../../_services/etudiant.service";
import {EnseignantChercheurService} from "../../_services/enseignant-chercheur.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  id: number | undefined;
  member: any;
  form: any;
  user: any;
  itemGlobal: any;

  constructor(private router: Router, private etudiantService: EtudiantService, private enseignantService: EnseignantChercheurService, private route: ActivatedRoute, private memberService: MemberService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.memberService.getMemberByid(this.id).then(item => {
      this.member = item;
      this.initForm1(item);
    })
  }

  initForm1(item: Member): void {
    this.form = new FormGroup({
      id:new FormControl(item.id),
      cin: new FormControl(item.cin),
      nom: new FormControl(item.nom),
      prenom: new FormControl(item.prenom),
      cv: new FormControl(item.cv),
      dateNaissance: new FormControl(item.dateNaissance),
      email: new FormControl(item.email),
      grade: new FormControl(item.grade),
      etablissement:new FormControl(item.etablissement)
    })

  }


  editEtudiant() {
    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    this.etudiantService.update(objectToSubmit).subscribe((res)=>{
      this.router.navigate(['/profile'])
    })
  }
  editEnseignant() {
    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    this.enseignantService.update(objectToSubmit).subscribe((res)=>{
      this.router.navigate(['/profile'])
    })
  }
}
