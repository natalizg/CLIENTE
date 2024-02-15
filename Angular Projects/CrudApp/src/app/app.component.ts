
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './dialog.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatToolbarModule, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrudApp';

  //Método para abrir un Dialog con el componente Añadir Post: (usa el servicio Dialog creado por nosotros)
  constructor(private dialogService: DialogService) {}
  openAddPostDialog() {
    this.dialogService.openAddPostDialog();
  }
}
