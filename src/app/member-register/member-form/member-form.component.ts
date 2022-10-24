import { getLocaleDateFormat } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  @Input() listMember: any;
  @Output() addMember: EventEmitter<any>;
  @ViewChild('nickname_member') nickname_member: ElementRef;
  @ViewChild('minidesc_member') minidesc_member: ElementRef;
  @ViewChild('urlimg_member') urlimg_member: ElementRef;

  constructor() { 
    this.addMember = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onAddNewMember(fullname_member: HTMLInputElement){
    let objMember={
      id_member: "IDS-"+ Date.now() +"-"+ this.nickname_member.nativeElement.value, //id member
      fullname_member: fullname_member.value, //local reference
      nickname_member: this.nickname_member.nativeElement.value, //view child reference
      minidesc_member: this.minidesc_member.nativeElement.value,
      urlimg_member: this.urlimg_member.nativeElement.value,
      status_member: "offline"
    }
    // console.log(objMember);
    this.addMember.emit(objMember);
    // console.log(this.id_member.nativeElement.value);
    // console.log(this.fullname_member.nativeElement.value);
  }

}
