import { Component } from '@angular/core';
import { Post } from '../post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!: number;
  post!: Post;
  form!: FormGroup;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('postId'));
      this.postService.find(this.id).subscribe((data: Post) => {
        this.post = data;
        this.form = new FormGroup({
          name: new FormControl(this.post.name, [Validators.required]),
          description: new FormControl(this.post.description, [Validators.required]),
          category: new FormControl(this.post.category, [Validators.required]),
          price: new FormControl(this.post.price, [Validators.required])
        });
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.postService.find(this.id).subscribe(
      (data: Post) => {
        // Handle successful response
        console.log(data);
      },
      (error) => {
        // Handle error
        console.error(error); // Log the error
        if (error === 'ERROR Item not found.') {
          // Display a user-friendly message indicating that the item was not found
          console.log('Item not found.');
        } else {
          // Handle other errors
          console.error('An error occurred:', error);
        }
      }
    );
  }
}
