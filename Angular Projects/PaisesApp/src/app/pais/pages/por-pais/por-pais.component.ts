import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-por-pais',
  standalone: true,
  imports: [PaisTablaComponent, PaisInputComponent, RouterModule, CommonModule],
  templateUrl: './por-pais.component.html',
  styles: 
      `
        li {
            cursor: pointer;
          }
      `
})
export class PorPaisComponent {
  
  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  
  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
