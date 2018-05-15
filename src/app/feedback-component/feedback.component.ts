import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavComponent } from './../widgets/sideNav-component/sidenav.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent {
  title = 'FeedbackComponent';
}
