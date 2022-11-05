import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combineWord'
})
export class CombineWordPipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/[\s+\.]/g,"").toLowerCase();
  }

}
