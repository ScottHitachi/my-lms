import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

declare const $: any;

@Component({
  selector: 'app-headnav',
  templateUrl: './headNav.component.html',
  styleUrls: ['./headNav.component.css']
})

@NgModule({
  declarations: [
    HeadNavComponent
  ],
  imports: [
    NgbModule
  ]
})

export class HeadNavComponent {
  constructor(public router: Router) { }
  logout() {
    this.router.navigate(['']);
  }
}
