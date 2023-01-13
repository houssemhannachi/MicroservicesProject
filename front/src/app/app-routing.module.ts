import {ToolsComponent} from './components/tools/tools.component';
import {MemberFormComponent} from './components/member-form/member-form.component';
import {MembersComponent} from './components/members/members.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './components/events/events.component';
import {LoginComponent} from './components/login/login.component';
import {AddMemberComponent} from "./components/add-member/add-member.component";
import {EtudiantFormComponent} from "./components/etudiant-form/etudiant-form.component";
import {EnseignantFormComponent} from "./components/enseignant-form/enseignant-form.component";
import {LoginAuthComponent} from "./components/login-auth/login-auth.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'members', pathMatch: 'full', component: MembersComponent},
  {path: 'create', pathMatch: 'full', component: MemberFormComponent},
  {path: 'createEtudiant', pathMatch: 'full', component: EtudiantFormComponent},
  {path: 'createEnseignant', pathMatch: 'full', component: EnseignantFormComponent},
  {path: 'loginAuth', pathMatch: 'full', component: LoginAuthComponent},
  {path: 'tools', pathMatch: 'full', component: ToolsComponent},
  {path: 'Events', pathMatch: 'full', component: EventsComponent},
  {path: 'addMember', pathMatch: 'full', component: AddMemberComponent},
  {
    path: 'members/:id/editStudent',
    pathMatch: 'full',
    component: EtudiantFormComponent,
  },
  {
    path: 'members/:id/editTeacher',
    pathMatch: 'full',
    component: EnseignantFormComponent,
  },
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'members'},
  //Dashboard component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
