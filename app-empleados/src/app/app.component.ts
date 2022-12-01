import { Component, OnInit } from '@angular/core';

import  firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService:LoginService){ }

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyDpn3jMB_Um9Eh_7UKecBgHufFzM3u0rEI ",
      authDomain: "mis-clientes-908ba"

    })

  }

  estaLogueado(){

    return this.loginService.estaLogueado();

  }

  logout(){

    this.loginService.logout();

  }
  
  

} 
