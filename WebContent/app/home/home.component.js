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
var rest_client_1 = require("../utils/rest.client");
var HomeComponent = (function () {
    function HomeComponent(userService, navbar, restClient) {
        this.userService = userService;
        this.navbar = navbar;
        this.restClient = restClient;
    }
    HomeComponent.prototype.testGoogleHome = function () {
        this.restClient.testGoogleHome().subscribe(function (data) { console.log('data=' + data); }, function (error) {
            console.error('error=' + JSON.stringify(error));
        }, function () {
            console.log('done!');
        });
    };
    HomeComponent.prototype.testMicroServiceAPI = function () {
        this.restClient.testMicroServiceAPI().subscribe(function (data) { console.log('data=' + data); }, function (error) {
            console.error('error=' + JSON.stringify(error));
        }, function () {
            console.log('done!');
        });
    };
    HomeComponent.prototype.testFindOneAPI = function () {
        this.restClient.testFindOneAPI().subscribe(function (data) { console.log('data=' + data); }, function (error) {
            console.error('error=' + JSON.stringify(error));
        }, function () {
            console.log('done!');
        });
    };
    HomeComponent.prototype.testAPI = function () {
        this.restClient.testAPI().subscribe(function (data) { console.log('data=' + data); }, function (error) {
            console.error('error=' + JSON.stringify(error));
        }, function () {
            console.log('done!');
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './app/home/home.component.html',
        providers: [user_service_1.UserService, navbar_component_1.NavbarComponent, rest_client_1.RestClient]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, navbar_component_1.NavbarComponent, rest_client_1.RestClient])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
