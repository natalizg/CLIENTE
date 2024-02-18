import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './dialog.service';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatToolbarModule, MatButtonModule,
            MatDialogModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  //Método para abrir un Dialog con el componente Añadir Post: (usa el servicio Dialog creado por nosotros)
  constructor(private dialogService: DialogService, private postService: PostService) {}
  
  ngOnInit(): void {
    this.getPostList();
  }
  

  openAddPostDialog() {
    this.dialogService.openAddPostDialog();
  }

  getPostList() {
    this.postService.getPostList().subscribe({
      next: (res) => {
        
      },
      error: console.log,
      
    })
  }

}
