import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SideNavComponent implements OnInit {

  @Input('title') titleCheck: String;

  isCourses = '';
  isStudymat = '';
  isExams = '';
  isFeedback = '';
  constructor(public router: Router) { }

  ngOnInit() {
    if (this.titleCheck === 'CourseComponent') {
      this.isCourses = 'menu-item-active';
      this.isStudymat = 'menu-item';
      this.isExams = 'menu-item';
      this.isFeedback = 'menu-item';

    } else if (this.titleCheck === 'StudymatComponent') {
      this.isCourses = 'menu-item';
      this.isStudymat = 'menu-item-active';
      this.isExams = 'menu-item';
      this.isFeedback = 'menu-item';
    } else if (this.titleCheck === 'ExamsComponent') {
      this.isCourses = 'menu-item';
      this.isStudymat = 'menu-item';
      this.isExams = 'menu-item-active';
      this.isFeedback = 'menu-item';
    } else if (this.titleCheck === 'FeedbackComponent') {
      this.isCourses = 'menu-item';
      this.isStudymat = 'menu-item';
      this.isExams = 'menu-item';
      this.isFeedback = 'menu-item-active';
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
}

  courses() {
    this.router.navigate(['/courses']);
  }

  studymat() {
    this.router.navigate(['/studymat']);
  }

  exams() {
    this.router.navigate(['/exam']);
  }

  feedback() {
    this.router.navigate(['/feedback']);
  }
}
