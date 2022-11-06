import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModuleService } from '../post-module.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost:any;

  constructor(private servicePost:PostModuleService, private route:Router) { }

  ngOnInit(): void {
    this.servicePost.getData().subscribe(data=>{
      this.listPost = data;
    })
  }

  onNavigateAdd(){
    this.route.navigate(['/post-form-add']);
  }

}
