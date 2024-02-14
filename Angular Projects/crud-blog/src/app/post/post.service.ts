import { Injectable } from '@angular/core'; // Importa el decorador Injectable de Angular
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpClient y HttpHeaders de Angular para realizar solicitudes HTTP
import { Observable, throwError } from 'rxjs'; // Importa Observable y throwError de RxJS para manejar flujos de datos asíncronos
import { catchError } from 'rxjs/operators'; // Importa catchError de RxJS para manejar errores en flujos de datos

import { Post } from './post'; // Importa la interfaz Post desde el archivo post.ts

@Injectable({
  providedIn: 'root' // Marca este servicio como un servicio raíz disponible en toda la aplicación
})
export class PostService {
  
  private apiURL = "https://jsonplaceholder.typicode.com"; // Define la URL base de la API

  // Definición de opciones para los encabezados HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' // Define el tipo de contenido como JSON para las solicitudes HTTP
    })
  }

  // Constructor: inyecta HttpClient para realizar solicitudes HTTP
  constructor(private httpClient: HttpClient) { }

  /** Método para obtener todos los posts */
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/') // Realiza una solicitud GET a la API para obtener todos los posts
      .pipe(
        catchError(this.errorHandler) // Maneja errores usando el método errorHandler
      )
  }
  
  /** Método para crear un nuevo post */
  //para acceder a una api se puede usar una promesa o tmb se puede hacer por httpClient con observables
  create(post: Post): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions) // Realiza una solicitud POST a la api para crear un nuevo post. Observables?
      .pipe( //con promesa no podría usar esto.
        catchError(this.errorHandler) // Maneja errores usando el método errorHandler
      )
  }
  
  /** Método para encontrar un post por su id */
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/' + id) // Realiza una solicitud GET a la API para encontrar un post por su ID
      .pipe(
        catchError(this.errorHandler) // Maneja errores usando el método errorHandler
      )
  }
  
  /** Método para actualizar un post existente */
  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions) // Realiza una solicitud PUT para actualizar un post existente
      .pipe( 
        catchError(this.errorHandler) // Maneja errores usando el método errorHandler
      )
  }
  
  /** Método para eliminar un post por su id */
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions) // Realiza una solicitud DELETE para eliminar un post por su ID
      .pipe(
        catchError(this.errorHandler) // Maneja errores usando el método errorHandler
      )
  }
  
  /** Manejador de errores común para todas las solicitudes HTTP */
  errorHandler(error: any) {
    let errorMessage = ''; // Inicializa la variable errorMessage
    if (error.error instanceof ErrorEvent) { // Comprueba si el error es del cliente
      errorMessage = error.error.message; // Asigna el mensaje de error del cliente a errorMessage
    } else { // Si no es un error del cliente, es un error del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; // Crea un mensaje de error con el código de estado y el mensaje del servidor
    }
    return throwError(errorMessage); // Lanza un error Observable con el mensaje de error
  }
}