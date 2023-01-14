import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnseignantChercheur} from "../_entities/EnseignantChercheur";
import {Etudiant} from "../_entities/Etudiant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnseignantChercheurService {

  constructor(private httpClient: HttpClient) {
  }

  saveEnseignant(enseignant: any): Promise<EnseignantChercheur> {

    return this.httpClient.post<EnseignantChercheur>('/server/MEMBRE-SERVICE/membres/addEnseignant', enseignant).toPromise()

  }
  update(enseignant: EnseignantChercheur): Observable<Object> {
    return this.httpClient.put(`/server/MEMBRE-SERVICE/members/updateEnseignant`, enseignant);

  }
}
