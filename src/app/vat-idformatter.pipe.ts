import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'vatIDFormatter'
})
export class VatIDFormatterPipe implements PipeTransform {

  transform(value: string, countryCode: string): string {
    if (!value) {
      return '';
    }

    return `USt-IdNr. ${countryCode}${value}`;
  }

}
