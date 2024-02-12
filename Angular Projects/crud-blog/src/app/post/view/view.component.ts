import { Component } from '@angular/core'; 
import { PostService } from '../post.service'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { Post } from '../post'; 

@Component({
  selector: 'app-view', 
  standalone: true, 
  imports: [], 
  templateUrl: './view.component.html', 
  styleUrl: './view.component.css' 
})
export class ViewComponent {
  
  id!: number; // Define una variable para almacenar el ID del post
  post!: Post; // Define una variable para almacenar el post

  // Constructor: inyecta el servicio PostService, ActivatedRoute y Router
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  /** Método que se ejecuta al inicializar el componente */
  ngOnInit(): void {
    // Obtiene el ID del post de los parámetros de la ruta
    this.id = this.route.snapshot.params['postId'];
    // Obtiene el post correspondiente al ID
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data; // Asigna el post obtenido a la variable post
    });
  }
}