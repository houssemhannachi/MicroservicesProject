import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../_services/member.service";
import {EnseignantChercheur} from "../../_entities/EnseignantChercheur";
import {ActivatedRoute, Router} from "@angular/router";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})


export class AffectationComponent implements OnInit {
  enseignants:EnseignantChercheur[] =[];
  currentID : any;
  etudiantID : any;
  selectedValue:any;
  constructor(private route:Router,private memberService: MemberService,private activatedRouter:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentID = this.activatedRouter.snapshot.params.id;
    this.etudiantID=Number(this.currentID);
    this.memberService.getMemberByType('ens').subscribe((res) => {
      this.enseignants=res;
    });
  }

  affecterEnseignant() {
    const objectToSubmit={idEtudiant:this.currentID, idEnseignant:this.selectedValue}
    this.memberService.affecterEnseignant(this.etudiantID,this.selectedValue).subscribe(res=>{
      this.route.navigate(['/members'])
    })
  }
}
