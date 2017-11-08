import {Component, HostListener} from '@angular/core';
import { UserService } from '../services/user.service';
import { Inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

declare var $:any;
@Component({
    selector: 'restaurant',
    templateUrl: './app/restaurant/restaurant.component.html',
    providers: [UserService, NavbarComponent]
})

export class RestaurantComponent {
  constructor(private userService: UserService, private navbar : NavbarComponent) { }
  
  
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
  }
}
