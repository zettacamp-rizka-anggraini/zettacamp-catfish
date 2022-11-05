import { Pipe, PipeTransform } from '@angular/core';
import { CombineWordPipe } from './combine-word.pipe';
import { AccentCharacterPipe } from './accent-character.pipe';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  combinePipe = new CombineWordPipe();
  accentPipe = new AccentCharacterPipe();
  transform(valueData: Array<any>, filter:string): string[]{
    // if(valueData.length === 0 || filter === ''){
    //   return valueData;
    // }

    // const resultArray = [];
    // for (const item of value){
    //   // console.log(item);
    //   if(item[propName] === filter){
    //     resultArray.push(item);
    //     // console.log(item.name);
    //   }
    // }
    // return resultArray;
    filter = this.accentPipe.transform(filter);
    // console.log(filter);
    // filter = this.combinePipe.transform(filter);
    // console.log(filter);
    return valueData.filter((value,index) => {
      let userName = this.accentPipe.transform(value.name);
      // userName = this.combinePipe.transform(userName);
      // console.log(userName)
      // return userName.includes(filter);

      if(userName.indexOf(filter)>-1){
        // console.log(index);
        return valueData[index];
      }
    });
  }

}
