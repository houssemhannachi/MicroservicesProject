import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../_services/member.service";
import {Member} from "../../_entities/Member";
import {EventService} from "../../_services/event.service";
import {Event} from "../../_entities/Event";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  members:Member[]|undefined;
  membersCount?:number=0;
  events:Event[]|undefined;
  eventsCount?:number;
  constructor(private memberService: MemberService,private eventService:EventService) { }

  ngOnInit(): void {
    this.memberService.getAllMembers().then(res=>{
      this.members=res;
      this.membersCount=this.members.length
    })
    this.eventService.getAllEvents().subscribe(res=>{
      this.events=res;
      this.eventsCount=this.events.length
    })
  }

}
