import { Component, OnInit } from '@angular/core';
import { PostModuleService } from '../post-module.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost:any;

  constructor(private servicePost:PostModuleService) { }

  ngOnInit(): void {
    this.servicePost.getPosts().subscribe(data=>{
      this.listPost = data;
    })
  }

}
