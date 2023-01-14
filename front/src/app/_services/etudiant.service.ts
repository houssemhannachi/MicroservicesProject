import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../_entities/Etudiant";
import {Member} from "../_entities/Member";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private httpClient: HttpClient) {
  }

  saveEtudiant(etudiant: any): Promise<Etudiant> {
    //req http t7el thread fel front o t7outou en ecoute lel les echanges eli ysirou fel back kima mail makhdoum bel observable
    const etudiantNew = {
      ...etudiant,
      id: etudiant.id,
    }
    return this.httpClient.post<Etudiant>('/server/MEMBRE-SERVICE/membres/addEtudiant', etudiantNew).toPromise()
  }
  getEtudiantByid(id: string): Promise<Member> {
    // this.httpClient.get<Member>('adresseipduback').toPromise();a

    //resolve = bloc try  == si on n'a pas d'erruer
    //louken l9a [0] y7outou sinon null > ?? == null
    // @ts-ignore
    return (new Promise(resolve => resolve(this.tab.filter(item => item.id === id) [0] ?? null)))
  }

  update(etudiant: Etudiant): Observable<Object> {
    return this.httpClient.put(`/server/MEMBRE-SERVICE/members/updateEtudiant`, etudiant);

  }
}
