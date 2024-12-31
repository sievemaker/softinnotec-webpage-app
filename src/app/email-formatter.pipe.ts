import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailFormatter'
})
export class EmailFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
