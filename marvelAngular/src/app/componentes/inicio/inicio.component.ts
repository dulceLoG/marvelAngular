import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../../modelos/personaje.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  listaMarvel:Personajes[] = [];
  detallePersonaje:Personajes | undefined ;

  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8080/marvel/getCharacters').subscribe((datos:any) => {
      this.listaMarvel = datos.data.results;
    });
  }

  obtenerDetalle(idPersonaje:string){
    this.http.get('http://localhost:8080/marvel/getPersonaje?id='+ idPersonaje).subscribe((datosPersonaje:any) => {
      this.detallePersonaje = datosPersonaje.data.results[0];
    });
    let modalDetalle = document.getElementById("ventanaEmergente");
    if(modalDetalle){
      modalDetalle.style.display = "block";
    }
  }
  
  cierraDetalle(){
    let modalDetalle = document.getElementById("ventanaEmergente");
    if(modalDetalle){
      modalDetalle.style.display = "none";
    }
  }
}
