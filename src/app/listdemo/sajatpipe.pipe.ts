import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sajatpipe'
})
export class SajatpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
