import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore vitae dolor officiis veniam
  aliquam quisquam. Aut enim quas animi. Nesciunt amet explicabo non quam tempore, soluta eos laboriosam! Quaerat, alias!</p>
  <br>
  <app-clases></app-clases>
  <br>
  <p [appResaltado]="'green'">
    Hola mundo
  </p>
  <br>
  <app-ng-switch></app-ng-switch>
  <br>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  };

  ngOnChanges() {
    console.log('ngOnChanges');
  };

  ngDoCheck() {
    console.log('ngDoCheck');
  };

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  };

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  };

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  };

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  };

  ngOnDestroy() {
    console.log('ngOnDestroy');
  };

}
