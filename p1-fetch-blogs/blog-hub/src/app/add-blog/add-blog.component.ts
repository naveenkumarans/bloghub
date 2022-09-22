import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor() { }

  saveBlog() {
    
  }
}
