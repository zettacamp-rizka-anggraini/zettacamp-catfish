import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.css'],
})
export class MemberRegisterComponent implements OnInit {
  nameTitle:boolean;
  arrayMember = [
    {
      id_member: 'IDS-1666327323286-Aji',
      fullname_member: 'Aji Pangestu',
      nickname_member: 'Aji',
      minidesc_member: 'Aku lahir dimana aja dan kapanpun',
      urlimg_member: 'https://picsum.photos/seed/picsum/500/350',
      status_member: 'offline'
    },
    {
      id_member: 'IDS-1666327323286-Aji',
      fullname_member: 'Bagas Bagasin',
      nickname_member: 'Bagas',
      minidesc_member: 'Aku lahir dimana aja dan kapanpun',
      urlimg_member: 'https://picsum.photos/seed/picsum/500/350',
      status_member: 'offline'
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewMember(new_member) {
    // console.log(new_member);
    this.arrayMember.push(new_member);
  }

  deleteNow(row){
    for(let i in this.arrayMember){
      if(this.arrayMember[i]['id'] == row.id){
        this.arrayMember.splice(parseInt(i), 1);
      }
    }
  }

  deleteToday(){
    this.arrayMember.splice(0, 1);
  }
}
