import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueOfBool'
})
export class BooltoStringPipe implements PipeTransform {
  transform(status: boolean, ...args: unknown[]): string {
    if (status == true) {
      return 'Done';
    } else {
      return 'Not Done';
    }
  }
}
