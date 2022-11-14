import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo,gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class TeacherManagementService {

  constructor(private apollo: Apollo) { }

  getAllTeachers(){
    return this.apollo.query({
      query: gql`
      query{
        GetAllTeachers(pagination:{limit:20, page:0}){
          _id
          first_name
          last_name
          full_name
          civility
          sex
          position
          email
          office_phone
          portable_phone
        }
      }
      `
    })
  }
}
