import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}


    cargarEmpleados(){

        return this.httpClient.get('https://mis-clientes-908ba-default-rtdb.firebaseio.com/datos.json');

    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://mis-clientes-908ba-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(


            Response=>console.log("se han guardadolos empleados: " + Response),

        
            error=> console.log("Error: " + error),

        );

    }



    actualizarEmpleado(indice:number,empleado:Empleado){
        
        let url='https://mis-clientes-908ba-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe(

            response=>console.log("se ha modificado correctamente el empleado: " + Response),

        
            error=> console.log("Error: " + error),

        );

    }

    eliminarEmpleado(indice:number){
        
        let url='https://mis-clientes-908ba-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(

            response=>console.log("se ha eliminado correctamente el empleado: " + Response),

        
            error=> console.log("Error: " + error),

        );

    }

}