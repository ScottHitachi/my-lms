import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SideNavComponent } from './../widgets/sideNav-component/sidenav.component';
import { HeadNavComponent } from './../widgets/headNav-component/headNav.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  title = 'CourseComponent';
}
