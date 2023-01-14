import {   MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from './Firebase.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { ArticlesComponent } from './components/articles/articles.component';
import { ToolsComponent } from './components/tools/tools.component';
import { EventsComponent } from './components/events/events.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArticleFormDialogComponent } from './components/article-form-dialog/article-form-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EtudiantFormComponent } from './components/etudiant-form/etudiant-form.component';
import { EnseignantFormComponent } from './components/enseignant-form/enseignant-form.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { LoginAuthComponent } from './components/login-auth/login-auth.component';

import { PublicationsComponent } from './components/publications/publications.component';
import { PublicationFormComponent } from './components/publication-form/publication-form.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

import { EventListComponent } from './components/event-list/event-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    ArticlesComponent,
    ToolsComponent,
    EventsComponent,
    ArticleFormDialogComponent,
    LoginComponent,
    AddMemberComponent,
    EtudiantFormComponent,
    EnseignantFormComponent,
    LoginAuthComponent,

    PublicationsComponent,
    PublicationFormComponent,
    FileUploadComponent,

    EventListComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FirebaseModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
