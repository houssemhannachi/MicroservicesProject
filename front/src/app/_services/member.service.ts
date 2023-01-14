import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Member} from 'src/app/_entities/Member';
import {Observable} from "rxjs";

const API_URL = '/server/MEMBRE-SERVICE/';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public tab: Member[] | undefined;

  constructor(private httpClient: HttpClient) {
  }

  saveMember(member: any): Promise<Member> {
    const memberNew = {
      ...member,
      id: member.id ?? Math.ceil(Math.random() * 10000).toString(),
      createdDate: member.createdDate ?? new Date().toISOString(),
    }
    this.httpClient.post<Member>('/server/MEMBRE-SERVICE/addMember', member).toPromise()
    return (new Promise(resolve => resolve(memberNew)))

  }

  getMemberByType(type:string|undefined):Observable<any> {
    return this.httpClient.get<any>(`/server/MEMBRE-SERVICE/memberByType/${type}`)
  }

  getMemberByid(id: number | undefined): Promise<Member> {
    return this.httpClient.get<Member>(`/server/MEMBRE-SERVICE/membres/${id}`).toPromise();
  }

  getMemberByEmail(email: String|undefined): Promise<Member> {
    return this.httpClient.get<Member>(`/server/MEMBRE-SERVICE/membres/email/${email}`).toPromise();
  }

  deleteMemberById(id: string): Promise<string> {
    return this.httpClient.delete<string>(`/server/MEMBRE-SERVICE/deleteMember/${id}`).toPromise()
  }

  getAllMembers(): Promise<Member []> {
    return this.httpClient.get<Member[]>(API_URL + 'membres').toPromise();
  }

  affecterEnseignant(idEtudiant:number,idEnseignant:number):Observable<any> {

    return this.httpClient.post<any>(API_URL+ `members/affecter/${idEtudiant}/${idEnseignant}`,idEnseignant);
  }


}
