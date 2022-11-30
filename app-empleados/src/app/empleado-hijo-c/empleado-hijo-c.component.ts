import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit{

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

  constructor(){ }


    ngOnInit(): void{

    }

    empleados:Empleado[]=[

      new Empleado("Juan","Diaz","presidente",7500),
      new Empleado("Ana","Martin","Directora",5500),
      new Empleado("Maria","Fernandez","Jefa Seccion",3500),
      new Empleado("Laura","Lopez","Administrativo",2500),
    ];

    empleadoAgregado(empleado:Empleado){

      this.empleados.push(empleado);

    }


    arrayCaracteristicas = [''];

    agregarCaracterististica(nuevaCaracteristica: string) {
      this.arrayCaracteristicas.push(nuevaCaracteristica);
    }
}
