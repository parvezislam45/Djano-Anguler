
import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  items: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any[]) => {
      this.items = data;
      console.log(this.items);
    });
  }

  deletePost(id: number): void {
    this.postService.delete(id).subscribe(
      () => {
        this.items = this.items.filter(item => item.id !== id);
        alert("Post Deleted");
      },
      error => {
        console.error('Error deleting post:', error);
        alert("Failed to delete post");
      }
    );
  }
}
