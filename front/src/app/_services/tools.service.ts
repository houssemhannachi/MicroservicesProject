import {Injectable} from '@angular/core';
import {Event} from "../_entities/Event";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Outil} from "../_entities/Outil";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private httpClient: HttpClient) {
  }

  saveTools(tool: any): Promise<Outil> {

    return this.httpClient.post<Outil>('/server/OUTIL-SERVICE/addTool', tool).toPromise()
  }

  getAllTools(): Observable<Outil[]> {
    return this.httpClient.get<Outil[]>('/server/OUTIL-SERVICE/tools');
  }
}
