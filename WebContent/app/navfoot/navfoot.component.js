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
var NavfootComponent = (function () {
    function NavfootComponent() {
    }
    NavfootComponent.prototype.ngOnInit = function () {
        console.log("init...");
    };
    NavfootComponent.prototype.doFootTest = function () {
        console.error('doFootTest...');
    };
    return NavfootComponent;
}());
NavfootComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navfoot',
        templateUrl: 'navfoot.component.html',
        styleUrls: ['navfoot.component.css']
    }),
    __metadata("design:paramtypes", [])
], NavfootComponent);
exports.NavfootComponent = NavfootComponent;

//# sourceMappingURL=navfoot.component.js.map
