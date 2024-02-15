import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'assets/posts.json';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  


  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) { // Comprueba si el error es del cliente
      errorMessage = error.error.message; // Asigna el mensaje de error del cliente a errorMessage
    } else { // Si no es un error del cliente, es un error del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; // Crea un mensaje de error con el código de estado y el mensaje del servidor
    }
    return errorMessage;
  }
}
