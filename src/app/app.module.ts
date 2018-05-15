import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes, Router} from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent} from './login-component/login.component';

import { SideNavComponent } from './widgets/sideNav-component/sidenav.component';
import { HeadNavComponent } from './widgets/headNav-component/headNav.component';

import { CourseComponent } from './course-component/course.component';
import { StudymatComponent } from './studymat-component/studymat.component';
import { FeedbackComponent } from './feedback-component/feedback.component';
import { ExamsComponent } from './exams-component/exams.component';

export const appRoutes: Routes = [
   { path: '', component: LoginComponent},
   { path: 'courses', component: CourseComponent},
   { path: 'studymat', component: StudymatComponent},
   { path: 'exam', component: ExamsComponent},
   { path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavComponent,
    HeadNavComponent,
    CourseComponent,
    StudymatComponent,
    FeedbackComponent,
    ExamsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
