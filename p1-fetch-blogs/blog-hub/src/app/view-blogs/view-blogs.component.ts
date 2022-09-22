import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
