import {Component, OnInit, AfterViewInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'about',
    templateUrl: './app/about/about.component.html',
    styleUrls: [ './app/about/about.component.css' ],
    providers: [NavbarComponent]
})

export class AboutComponent implements OnInit, AfterViewInit{
  constructor(private navbar: NavbarComponent) { }
  ngOnInit(): void {
    return;  }  ngAfterViewInit(): void {
    return;
  }
  
   
}
