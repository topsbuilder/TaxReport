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
var NavRestaurantComponent = (function () {
    function NavRestaurantComponent(elementRef) {
        this.elementRef = elementRef;
        this.isCollapsed = true;
    }
    NavRestaurantComponent.prototype.ngOnInit = function () {
        console.log("init...");
    };
    NavRestaurantComponent.prototype.doTest = function () {
        console.log('doTest...');
    };
    NavRestaurantComponent.prototype.goto = function (tagId, fromId) {
        var innerHeight = window.innerHeight;
        //    console.log("innerHeight=" + innerHeight);
        var outerHeight = window.outerHeight;
        //    console.log("outerHeight=" + outerHeight);    
        //    let v = document.getElementById('test2').getBoundingClientRect().top;
        //    console.log(v);
        var element = document.getElementById(tagId);
        console.log(element);
        if (element) {
            element.scrollIntoView(); //scroll to the anchor by the id
            window.scrollBy(0, -100); //scroll to Y offest as 0 and offset top 100
            $("a[id^='head_']").removeClass('navactive');
            $('#' + fromId).addClass('navactive');
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
    };
    NavRestaurantComponent.prototype.toggleState = function () {
        console.log("toggle...");
        var bool = this.isCollapsed;
        this.isCollapsed = bool === false ? true : false;
    };
    NavRestaurantComponent.prototype.resetToggle = function () {
        this.isCollapsed = false;
    };
    return NavRestaurantComponent;
}());
NavRestaurantComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navRestaurant',
        templateUrl: 'navRestaurant.component.html',
        styleUrls: ['navRestaurant.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NavRestaurantComponent);
exports.NavRestaurantComponent = NavRestaurantComponent;

//# sourceMappingURL=navRestaurant.component.js.map
