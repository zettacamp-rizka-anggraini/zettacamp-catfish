import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css', '../card-list.component.css', '../../app.component.css']
})

export class CardContentComponent implements OnInit {
  
  public productAdd:number = 0;
  public productAddMessage = "No Product In Shopping Cart";
  public status='Add Shopping Cart'
  public color=true;
  public item=1;
  public itemArray = [
    {id:"1", img:"https://picsum.photos/seed/picsum/150/100", name:"electronic", shop:"ygkt", description:"this product contain electronic", toggle:true},
    {id:"2", img:"https://picsum.photos/seed/picsum/150/100", name:"food", shop:"jkt", description:"this product contain food"},
    {id:"3", img:"https://picsum.photos/seed/picsum/150/100", name:"baverage", shop:"bdg", description:"this product contain baverage"},
    {id:"4", img:"https://picsum.photos/seed/picsum/150/100", name:"clothes", shop:"solo", description:"this product contain  clothes"},
    {id:"5", img:"https://picsum.photos/seed/picsum/150/100", name:"hoodie", shop:"srby", description:"this product contain hoodie"},
    {id:"6", img:"https://picsum.photos/seed/picsum/150/100", name:"shoes", shop:"smrg", description:"this product contain shoes"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){

  }

  onAddShoppingCart(item){
    //console.log(item);
    if(item.id==1){
      console.log(item.id);
      this.productAddMessage = 'Product '+ item.name +' Has Been Add';
      this.color = false; 
    } else if (item.id==2) {
      console.log(item.id);
      this.productAddMessage = 'Product '+ item.name +' Has Been Add';
      this.color = true; 
    } else if (item.id==3) {
      console.log(item.id);
      this.productAddMessage = 'Product '+ item.name +' Has Been Add';
    } else if (item.id==4) {
      console.log(item.id);
      this.productAddMessage = 'Product '+ item.name +' Has Been Add';
    } else if (item.id==5) {
      console.log(item.id);
      this.productAddMessage = 'Product '+ item.name +' Has Been Add';
    } else if (item.id==6) {
      console.log(item.id);
      this.productAddMessage = 'Product '+ item.name +' Has Been Add';
    }
  }

}
