import {Component, OnInit} from '@angular/core';
import {Event} from "../../_entities/Event";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../../_services/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  selected?: Date | null;
  form: any;
  itemGlobal?: any;

  constructor(private eventService:EventService,private router:Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = new FormGroup({
      dateEvent: new FormControl(null, [Validators.required]),
      lieuEvent: new FormControl(null, [Validators.required]),
      titreEvent: new FormControl(null, [Validators.required]),
    })

  }

  addEvent() {
    const objectToSubmit = {...this.itemGlobal, ...this.form.value}
    objectToSubmit.dateEvent = this.selected;
    this.eventService.saveEvent(objectToSubmit).then((res)=>{
      this.router.navigate(['./eventsList'])
    })

  }
}
