import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { PostModuleService } from '../../post-module.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  @Input() dataPost:any;

  constructor(private route:Router, private servicePost:PostModuleService) { }

  ngOnInit(): void {
  }

  isEdit(userid:number){
    this.route.navigate(['/post-form', userid]);
  }

  isDelete(userid:number){
    this.servicePost.deleteData(userid).subscribe(()=>{});
  }

}
