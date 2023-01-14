import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../_entities/Member";
import {Publication} from "../_entities/Publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private httpClient: HttpClient) { }
  savePublication(publication: any): Promise<Publication> {
    return this.httpClient.post<Publication>('/server/PUBLICATION-SERVICE/addPublication', publication).toPromise()
  }

  getPublicationByid(id: string): Promise<Publication> {
    return this.httpClient.get<Publication>(`/server/PUBLICATION-SERVICE/publication/${id}`).toPromise();
  }

  deletePublicationById(id: string): Promise<string> {
    return this.httpClient.delete<string>(`/server/PUBLICATION-SERVICE/deletePublication/${id}`).toPromise()
  }

  getAllPublications(): Promise<Publication []> {
    return this.httpClient.get<Publication[]>(  '/server/PUBLICATION-SERVICE/publications').toPromise();
  }


}
