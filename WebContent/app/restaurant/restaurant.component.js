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
var user_service_1 = require("../services/user.service");
var navbar_component_1 = require("../navbar/navbar.component");
var RestaurantComponent = (function () {
    function RestaurantComponent(userService, navbar) {
        this.userService = userService;
        this.navbar = navbar;
    }
    RestaurantComponent.prototype.onWindowScroll = function () {
        var innerHeight = window.innerHeight;
        var half = innerHeight / 2;
        var NAVS = [
            { id: 1, name: 'top' },
            { id: 2, name: 'about' },
            { id: 3, name: 'pricing' },
            { id: 4, name: 'beer' },
            { id: 5, name: 'bread' },
            { id: 6, name: 'featured' },
            { id: 7, name: 'reservation' },
            { id: 8, name: 'contact' }
        ];
        for (var _i = 0, NAVS_1 = NAVS; _i < NAVS_1.length; _i++) {
            var nav = NAVS_1[_i];
            var currentId = nav.name;
            var offsetTop = document.getElementById(currentId).getBoundingClientRect().top;
            if (currentId === 'about' && offsetTop > half) {
                //console.log(offsetTop);
                $("a[id^='head_']").removeClass('navactive');
                $('#' + 'head_' + 'top').addClass('navactive');
            }
            else if (offsetTop < half && offsetTop > 100) {
                $("a[id^='head_']").removeClass('navactive');
                $('#' + 'head_' + currentId).addClass('navactive');
            }
        }
    };
    return RestaurantComponent;
}());
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestaurantComponent.prototype, "onWindowScroll", null);
RestaurantComponent = __decorate([
    core_1.Component({
        selector: 'restaurant',
        templateUrl: './app/restaurant/restaurant.component.html',
        providers: [user_service_1.UserService, navbar_component_1.NavbarComponent]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, navbar_component_1.NavbarComponent])
], RestaurantComponent);
exports.RestaurantComponent = RestaurantComponent;

//# sourceMappingURL=restaurant.component.js.map
