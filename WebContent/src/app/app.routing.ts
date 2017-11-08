import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestaurantComponent} from './restaurant/restaurant.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
