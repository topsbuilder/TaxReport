"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var navfoot_component_1 = require("./navfoot/navfoot.component");
var router_1 = require("@angular/router");
var rest_client_1 = require("./utils/rest.client");
var AppComponent = (function () {
    //  isIn = false;   // store state
    //  numberOfClicks = 0;
    function AppComponent(elementRef, activatedRoute, router, restClient) {
        this.elementRef = elementRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.restClient = restClient;
    }
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
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent initializing...');
        //this.navbar.doTest();
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
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
    };
    AppComponent.prototype.onClick = function (event) {
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
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        providers: [navfoot_component_1.NavfootComponent, rest_client_1.RestClient]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, router_1.ActivatedRoute, router_1.Router, rest_client_1.RestClient])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
