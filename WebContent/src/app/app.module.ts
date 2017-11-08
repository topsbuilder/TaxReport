import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavRestaurantComponent } from './navRestaurant/navRestaurant.component';
import { NavfootComponent } from './navfoot/navfoot.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
      	NavbarComponent,
        NavRestaurantComponent,
      	NavfootComponent,

        AppComponent,
        HomeComponent,
        AboutComponent,
        RestaurantComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})

export class AppModule {
}
