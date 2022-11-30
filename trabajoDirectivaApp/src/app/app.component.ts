import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';

  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: any[];

  constructor(){

    this.entradas=[

      {titulo:"Python cada dia maspresente"},
      {titulo:"Java presente desde hace mas de 20 años"},
      {titulo:"JavaScript cada ves mas funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Donde quedo pascal?"},
    ]


  }


  registrarUsuario(){

    this.registrado=true

    this.mensaje="usuario registrado con exito"
  }
}
