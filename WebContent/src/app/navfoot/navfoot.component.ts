import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navfoot',
  templateUrl: 'navfoot.component.html',
  styleUrls: [ 'navfoot.component.css' ]
})
export class NavfootComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log("init...");
  }
   
  public doFootTest(){
      console.error('doFootTest...');
    } 

}