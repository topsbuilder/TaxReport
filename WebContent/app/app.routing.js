"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var restaurant_component_1 = require("./restaurant/restaurant.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'restaurant', component: restaurant_component_1.RestaurantComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
