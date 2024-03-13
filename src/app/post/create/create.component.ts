import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostService) {
    this.form = this.fb.group({
      id:['',Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  
  submit() {
    if (this.form.valid) {
      const postData = this.form.value;
      this.postService.create(postData).subscribe(
        (response) => {
          console.log('Post created successfully:', response);
       
        },
        (error) => {
          console.error('Error creating post:', error);
        }
      );
    }
  }
  get f() {
    return this.form.controls;
  }

}
