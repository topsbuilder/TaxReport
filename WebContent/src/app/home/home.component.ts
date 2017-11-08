import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RestClient } from '../utils/rest.client';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.component.html',
  providers: [UserService, NavbarComponent, RestClient]
})

export class HomeComponent {

  constructor(private userService: UserService, private navbar: NavbarComponent, private restClient: RestClient) {
  }

  testGoogleHome() {
    this.restClient.testGoogleHome().subscribe(
      (data) => { console.log('data=' + data) },
      (error) => {
        console.error('error=' + JSON.stringify(error));
      },
      () => {
        console.log('done!');
      }
    );
  }


  testMicroServiceAPI() {
    this.restClient.testMicroServiceAPI().subscribe(
      (data) => { console.log('data=' + data) },
      (error) => {
        console.error('error=' + JSON.stringify(error));
      },
      () => {
        console.log('done!');
      }
    );
  }

   testFindOneAPI() {
    this.restClient.testFindOneAPI().subscribe(
      (data) => { console.log('data=' + data)},
      (error) => {
        console.error('error=' + JSON.stringify(error));
      },
      () => {
        console.log('done!');
      }
    );
  } 
  testAPI() {
    this.restClient.testAPI().subscribe(
      (data) => { console.log('data=' + data) },
      (error) => {
        console.error('error=' + JSON.stringify(error));
      },
      () => {
        console.log('done!');
      }
    );
  }
}
