import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardListService {
  constructor() {}

  arrayHero = [
    {
      name: 'Iron Man',
      position: 'Marvel Universe',
      first_mision: 'The Avengers 2012',
      imgURL: "https://bvwnews.com/wp-content/uploads/2020/11/avengers.jpg",
      status: "Still Life"
    },
    {
      name: 'Hulk',
      position: 'Marvel Universe',
      first_mision: 'The Avengers 2012',
      imgURL: "https://bvwnews.com/wp-content/uploads/2020/11/avengers.jpg",
      status: "Still Life"
    },
    {
      name: 'Captain America',
      position: 'Marvel Universe',
      first_mision: 'The Avengers 2012',
      imgURL: "https://bvwnews.com/wp-content/uploads/2020/11/avengers.jpg",
      status: "Still Life"
    },
    {
      name: 'Black Widow',
      position: 'Marvel Universe',
      first_mision: 'The Avengers 2012',
      imgURL: "https://bvwnews.com/wp-content/uploads/2020/11/avengers.jpg",
      status: "Still Life"
    },
    {
      name: 'Hawkeye',
      position: 'Marvel Universe',
      first_mision: 'The Avengers 2012',
      imgURL: "https://bvwnews.com/wp-content/uploads/2020/11/avengers.jpg",
      status: "Still Life"
    },
    {
      name: 'Thor',
      position: 'Marvel Universe',
      first_mision: 'The Avengers 2012',
      imgURL: "https://bvwnews.com/wp-content/uploads/2020/11/avengers.jpg",
      status: "Still Life"
    },
  ];

  updateNameSub(newStatus){
    let index = this.arrayHero.findIndex(x=> x.name == newStatus.name);
    console.log("index = ", index);
    this.arrayHero[index].status = "Died";
    alert("Super Hero = " + this.arrayHero[index].name + " Status Has Been Update");
  }
}
