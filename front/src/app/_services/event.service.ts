import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../_entities/Etudiant";
import {Event} from "../_entities/Event";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  saveEvent(event: any): Promise<Event> {

    return this.httpClient.post<Event>('/server/EVENEMENT-SERVICE/addEvent', event).toPromise()
  }

  getAllEvents():Observable<Event[]> {
    return this.httpClient.get<Event[]>('/server/EVENEMENT-SERVICE/events');
  }
}
