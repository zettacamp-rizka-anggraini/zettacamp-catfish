import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Register } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterPageService {

  constructor(private apollo:Apollo) { }

  createNewUser(dataNewUser:Register){
    return this.apollo.mutate({
      mutation: gql`
      mutation CreateUser($firstName: String, $lastName: String, $email: String, $password: String) {
        CreateUser(first_name: $firstName, last_name: $lastName, email: $email, password: $password) {
          _id
          email
          first_name
          last_name
          password
          role
          status
        }
      }`,
      variables: {
        firstName: dataNewUser.firstname,
        lastName: dataNewUser.lastname,
        email: dataNewUser.email,
        password: dataNewUser.password
      }
    })
  }
}
