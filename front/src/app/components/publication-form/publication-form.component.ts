import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Publication} from "../../_entities/Publication";
import {ActivatedRoute, Router} from "@angular/router";
import {PublicationService} from "../../_services/publication.service";
import {PublicationsComponent} from "../publications/publications.component";

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent implements OnInit {
  form: any;
  publication :Publication = new Publication();

  constructor(private ActivatedRouter : ActivatedRoute,private publicationService : PublicationService, private router: Router) { }

  ngOnInit(): void {
    const publicationId = this.ActivatedRouter.snapshot.params.id;
    if (!!publicationId) {
      this.publicationService.getPublicationByid(publicationId).then(res => {
        this.initEditForm(res);
      })
    }
    this.initAddForm();
  }
  initAddForm(): void {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      dateApparition: new FormControl(null, [Validators.required]),
      lien: new FormControl(null, [Validators.required]),
      sourcePdf: new FormControl(null, [Validators.required]),
    })
  }
  initEditForm(publication: Publication): void {
    this.form = new FormGroup({
      titre: new FormControl(publication.titre),
      dateApparition: new FormControl(publication.dateApparition),
      lien: new FormControl(publication.lien),
    })
  }

  addPublication() {
    const publicationtToSubmit = {...this.publication,...this.form.value}
    this.publicationService.savePublication(publicationtToSubmit).then((res) => {
      this.router.navigate(['./publications'])
      });
  }

  setCv($event: any) {
    this.publication.fileDB = $event;
    console.log($event);
  }
}
