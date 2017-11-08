import { Component, OnInit, ElementRef } from '@angular/core';

declare var $:any;
@Component({
  moduleId: module.id,
  selector: 'navRestaurant',
  templateUrl: 'navRestaurant.component.html',
  styleUrls: [ 'navRestaurant.component.css' ]
})
export class NavRestaurantComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor(private elementRef : ElementRef) {}

  ngOnInit() {
    console.log("init...");
  }
   
  public doTest(){
      console.log('doTest...');
    } 

  goto(tagId: string, fromId: string){
    let innerHeight =window.innerHeight;
//    console.log("innerHeight=" + innerHeight);
    let outerHeight =window.outerHeight;
//    console.log("outerHeight=" + outerHeight);    
//    let v = document.getElementById('test2').getBoundingClientRect().top;
//    console.log(v);
    let element = document.getElementById(tagId);
    console.log(element);
    if (element) {
        element.scrollIntoView(); //scroll to the anchor by the id
        window.scrollBy(0, -100); //scroll to Y offest as 0 and offset top 100
        $("a[id^='head_']").removeClass('navactive');
       $('#'+fromId).addClass('navactive');
     }
    
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
    
    toggleState() {
      console.log("toggle...");
      let bool = this.isCollapsed;
      this.isCollapsed = bool === false ? true : false;
    }
    resetToggle() {
      this.isCollapsed = false;
    }
}