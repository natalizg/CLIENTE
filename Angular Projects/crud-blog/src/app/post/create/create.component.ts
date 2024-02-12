import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { PostService } from '../post.service'; 
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; // Importa módulos y clases para trabajar con formularios reactivos

@Component({
  selector: 'app-create', 
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './create.component.html', 
  styleUrl: './create.component.css' 
})
export class CreateComponent {
  
  form!: FormGroup; // Define una variable para almacenar el formulario

  // Constructor: inyecta el servicio PostService y Router
  constructor(
    public postService: PostService,
    private router: Router
  ) { }
  
  /** Método que se ejecuta al inicializar el componente */
  ngOnInit(): void {
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
    // Envía los datos del formulario al servicio para crear un nuevo post
    this.postService.create(this.form.value).subscribe((res:any) => {
      console.log('Post created successfully!'); // Imprime un mensaje de éxito en la consola
      this.router.navigateByUrl('post/index'); // Navega a la página de índice de posts después de crear el post
    })
  }
}