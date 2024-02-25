import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: 
  `
  body {
    font-family: 'Montserrat', sans-serif;
  }
  p {
    text-align: center;    
  }
  .social-icon {
    margin-right: 100px;
  }
  `
})
export class AboutComponent {

}
