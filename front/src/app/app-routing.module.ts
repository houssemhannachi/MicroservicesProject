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

import {PublicationsComponent} from "./components/publications/publications.component";
import {PublicationFormComponent} from "./components/publication-form/publication-form.component";

import {EventListComponent} from "./components/event-list/event-list.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {AffectationComponent} from "./components/affectation/affectation.component";
import {AddToolComponent} from "./components/add-tool/add-tool.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'loginAuth'},
  {path: 'members', pathMatch: 'full', component: MembersComponent},
  {path: 'publications', pathMatch: 'full', component: PublicationsComponent},
  {path: 'create', pathMatch: 'full', component: MemberFormComponent},
  {path: 'createEtudiant', pathMatch: 'full', component: EtudiantFormComponent},
  {path: 'addPublication', pathMatch: 'full', component: PublicationFormComponent},
  {path: 'createEnseignant', pathMatch: 'full', component: EnseignantFormComponent},
  {path: 'loginAuth', pathMatch: 'full', component: LoginAuthComponent},
  {path: 'tools', pathMatch: 'full', component: ToolsComponent},
  {path: 'events', pathMatch: 'full', component: EventsComponent},
  {path: 'addTool', pathMatch: 'full', component: AddToolComponent},
  {path: 'eventsList', pathMatch: 'full', component: EventListComponent},
  {path: 'addMember', pathMatch: 'full', component: AddMemberComponent},
  {
    path: 'members/:id/editStudent',
    pathMatch: 'full',
    component: EtudiantFormComponent,
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
  },
  {
    path: 'members/:id/editTeacher',
    pathMatch: 'full',
    component: EnseignantFormComponent,
  },
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path:'editProfile/:id',component:EditProfileComponent},
  {path:'affectation/:id',component:AffectationComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'members'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
