import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PostService } from '../services/post.service';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, 
            ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private _postService: PostService, private _dialogRef: DialogRef <AddPostComponent>) {
    this.postForm = this.fb.group({
      titulo: '',
      texto: ''
    })
  }

  onFormSubmit() {
    if(this.postForm.valid) {
      this._postService.addPost(this.postForm.value).subscribe({
        next: (val: any) => {
          alert('Post añadido.')
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
