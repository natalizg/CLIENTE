import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { PostService } from '../post.service'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { Post } from '../post'; 
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-edit', 
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './edit.component.html', 
  styleUrl: './edit.component.css' 
})
export class EditComponent {
  
  id!: number; // Define una variable para almacenar el ID del post
  post!: Post; // Define una variable para almacenar el post
  form!: FormGroup; // Define una variable para almacenar el formulario

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
        
    // Inicializa el formulario con los campos "title" y "body"
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]), // Campo para el título del post, requerido
      body: new FormControl('', Validators.required) // Campo para el cuerpo del post, requerido
    });
  }
  
  /** Getter para acceder a los controles del formulario */
  get f(){
    return this.form.controls;
  }
  
  /** Método para enviar el formulario */
  submit(){
    console.log(this.form.value); // Imprime los valores del formulario en la consola
    // Envía los datos del formulario al servicio para actualizar el post
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
      console.log('Post updated successfully!'); // Imprime un mensaje de éxito en la consola
      this.router.navigateByUrl('post/index'); // Navega a la página de índice de posts después de actualizar el post
    })
  }
}