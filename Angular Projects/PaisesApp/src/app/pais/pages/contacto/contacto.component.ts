import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styles: 
  `
  .social-icon {
    margin-right: 100px;
  }
  p {
    text-align: center;    
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  `
})
export class ContactoComponent {
  formData = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  submitForm() {
    console.log(this.formData);
  }
}
