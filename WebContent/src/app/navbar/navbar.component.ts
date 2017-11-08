import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';

declare var $:any;
@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.css' ]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor(private elementRef : ElementRef) {}

  ngOnInit() {
  }
  public doTest(){
    console.log('doTest...');
  }
  ngAfterViewInit(): void {    return;  }

}