import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { PostModuleService } from '../post-module.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {
  formPosts:FormGroup;
  data:any;
  id:any;
  upDate: {title:string, body:string};
  payload: {title:string, body:string};

  constructor(
    private route:Router, 
    private activeRoute:ActivatedRoute, 
    private servicePosts:PostModuleService, 
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formPosts = this.fb.group({
      id: [null, Validators.required],
      userId: [null, Validators.required],
      title: [null, Validators.required],
      body: [null, Validators.required]
    });

    if (this.activeRoute.snapshot.params['id']) {
      this.id = this.activeRoute.snapshot.params['id'];
      this.getDataId(this.id);
    } else {
      this.id == null;
    }
  }

  getDataId(id){
    this.servicePosts.getData().subscribe(x=>{
      this.data = x;
      this.id = this.data.filter(y=>y.id==id);

      this.formPosts.patchValue(this.id[0]);

      // console.log(this.id);
    });
  }

  onSubmit(){
    if (this.id) {
      if(this.formPosts.valid){
        // console.log("berhasil");
        this.id = this.id;
        // console.log(this.id);
        this.payload = this.formPosts.value;
        this.servicePosts.updateData(this.id, this.payload).subscribe((res:any)=>{
          this.formPosts.patchValue(res);
          // console.log('berhasil');

          Swal.fire({
            title: 'Success!',
            text: 'Data has been Edited',
            icon: 'success',
            confirmButtonText: 'Back To Home'
          }).then(()=>{
            this.route.navigate(['post-module']);
          });
        });
      } else {
        console.log('gagal');
        Swal.fire({
          title: 'Error!',
          text: 'Data cant be Edited',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    } else {
      if(this.formPosts.valid){
        this.payload = this.formPosts.value;

        this.servicePosts.addData(this.payload).subscribe((res:any)=>{
          this.formPosts.patchValue(res);
          Swal.fire({
            title: 'Success!',
            text: 'Data has been Edited',
            icon: 'success',
            confirmButtonText: 'Back To Home'
          }).then(()=>{
            this.route.navigate(['post-module']);
          })
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Data Has Not Been Filled',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  }
}
