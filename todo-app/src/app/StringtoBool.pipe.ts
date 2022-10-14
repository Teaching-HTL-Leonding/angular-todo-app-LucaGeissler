import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueOfString',
})
export class StringtoBoolPipe implements PipeTransform {
  transform(select: string, ...args: unknown[]): boolean {
    if(select == 'Done'){
      return true;
    }else{
      return false;
    }
  }
}
