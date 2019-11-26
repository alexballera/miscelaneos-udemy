import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore vitae dolor officiis veniam
  aliquam quisquam. Aut enim quas animi. Nesciunt amet explicabo non quam tempore, soluta eos laboriosam! Quaerat, alias!</p>
  <app-clases></app-clases>

  <p [appResaltado]="'green'">
    Hola mundo
  </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
