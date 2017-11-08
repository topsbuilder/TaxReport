import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, AfterViewChecked, HostListener} from '@angular/core';
import { NavfootComponent } from './navfoot/navfoot.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {RestClient} from './utils/rest.client';

declare var $:any;
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html', 
    providers: [NavfootComponent, RestClient]
})

export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
//  isIn = false;   // store state
//  numberOfClicks = 0;
  
  constructor(private elementRef : ElementRef, private activatedRoute: ActivatedRoute, private router: Router, private restClient: RestClient) { }
/*
  @HostListener('window:scroll') onWindowScroll() {
      let innerHeight: number =window.innerHeight;
      let half = innerHeight/2;
      const NAVS = [
        { id: 1, name: 'top' },
        { id: 2, name: 'about' },
        { id: 3, name: 'pricing' },
        { id: 4, name: 'beer' },
        { id: 5, name: 'bread' },
        { id: 6, name: 'featured' },
        { id: 7, name: 'reservation' },
        { id: 8, name: 'contact' }
      ];
      for(let nav of NAVS){
        let currentId: string = nav.name;
        let offsetTop: number = document.getElementById(currentId).getBoundingClientRect().top;
        if(currentId === 'about' && offsetTop > half){ //handle top and first anchor
          //console.log(offsetTop);
          $("a[id^='head_']").removeClass('navactive');
          $('#'+'head_'+'top').addClass('navactive');
        }else if(offsetTop < half && offsetTop > 100){
          $("a[id^='head_']").removeClass('navactive');
          $('#'+'head_'+currentId).addClass('navactive');
        }      
      }
  }*/
  ngOnInit() {
    console.log('AppComponent initializing...');
    //this.navbar.doTest();
  }
  ngAfterViewChecked() {

  }

  ngAfterViewInit() {

//    console.log('AppComponent AfterViewInit...');
//    let length : number = document.querySelectorAll('.menuList').length;
//    var doms = document.querySelectorAll('.menuList')[0].getAttribute('id');
//    for(var i = 0; i < length; i++){
//      //document.querySelectorAll('.menuList')[i].setAttribute('class', 'inactive');
//      let id: string = document.querySelectorAll('.menuList')[i].getAttribute('id');
//      console.log('id=' + id);
//      //let obj = this.elementRef.nativeElement.querySelector('#' + id);
//      let obj = document.getElementById(id);
//      console.log('obj=' + obj);
//      let el = <HTMLDivElement>(obj);
//      console.log('className=' + el.className);
//      obj.addEventListener('click', this.onClick.bind(this));
//    }
  }
  
  onClick(event: Event) {
  
//    let menuList = document.querySelectorAll('.active');
//    let length : number = menuList.length;
//  console.log('length=' + length);
//    for(var i = 0; i < length; i++){
//      console.log(menuList[i]);
//      let id = menuList[i].getAttribute('id');
//      console.log('id=' + id);
//      let obj = document.getElementById(id);
//      console.log('obj.className=' + obj.className);
//      obj.className = 'menuList';  
//      console.log('reset after className=' + obj.className);
//    }
  
  
//   // console.log(event.currentTarget);
//    let target = <HTMLDivElement>(event.currentTarget);
//    //console.log('className=' + target.className);
//    target.className = 'active';
//    console.log('after className=' + target.className);
  }
}
