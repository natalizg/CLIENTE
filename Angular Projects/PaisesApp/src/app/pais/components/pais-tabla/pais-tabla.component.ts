import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pais-tabla',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pais-tabla.component.html',
  styles: ``
})
export class PaisTablaComponent implements OnInit {
  
  @Input() paises: Country[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
