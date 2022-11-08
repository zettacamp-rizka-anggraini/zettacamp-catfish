import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorManagementService {

  private mentor = new BehaviorSubject<any>(null);
  dataMentor$ = this.mentor.asObservable();

  mentorData:any;

  constructor(private httpClient:HttpClient) { }

  initialization(){
    this.fetchJsonMentor().subscribe((data)=>{
      this.mentorData = data;
      this.mentorData.next(this.mentorData);
    })
  }
  
  fetchJsonMentor(){
    return this.httpClient.get<any>('assets/json/mentor.json');
  }
}
