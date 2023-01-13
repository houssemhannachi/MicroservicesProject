import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnseignantChercheur} from "../_entities/EnseignantChercheur";
import {Member} from "../_entities/Member";

@Injectable({
  providedIn: 'root'
})
export class EnseignantChercheurService {

  constructor(private httpClient: HttpClient) {
  }

  saveEnseignant(enseignant: any): Promise<EnseignantChercheur> {
    //req http t7el thread fel front o t7outou en ecoute lel les echanges eli ysirou fel back kima mail makhdoum bel observable
    const enseignantNew = {
      ...enseignant,
      id: enseignant.id ?? Math.ceil(Math.random() * 10000).toString(),
      createdDate: enseignant.createdDate ?? new Date().toISOString(),
    }
    this.httpClient.post<EnseignantChercheur>('/server/MEMBRE-SERVICE/membres/addEnseignant', enseignant).toPromise()
    return (new Promise(resolve => resolve(enseignantNew)))

  }
}
