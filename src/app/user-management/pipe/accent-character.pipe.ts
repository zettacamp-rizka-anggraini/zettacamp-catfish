import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accentCharacter'
})
export class AccentCharacterPipe implements PipeTransform {

  transform(valuee:string):string{
    // if(value){
    //   const regex = new RegExp(search, 'i');
    //   const properties = Object.keys(value[0]);
    //   return [
        
    //   ];
    // }

    // console.log(valuee.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    valuee = valuee.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // console.log(valuee);
    return valuee.replace(/[\s\.,]/g,"").toLowerCase();
  }

}
