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

  getMemberByid(id: string|undefined): Promise<Member> {
    return this.httpClient.get<Member>(`/server/MEMBRE-SERVICE/membres/${id}`).toPromise();
  }

  deleteMemberById(id: string): Promise<string> {
    return this.httpClient.delete<string>(`/server/MEMBRE-SERVICE/deleteMember/${id}`).toPromise()
  }

  getAllMembers(): Promise<Member []> {
    return this.httpClient.get<Member[]>(API_URL + 'membres').toPromise();
  }


}
