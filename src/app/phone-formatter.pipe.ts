import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'phoneFormatter'
})
export class PhoneFormatterPipe implements PipeTransform {

  transform(phone: string, country: string): string {
    if (!phone || !country) return phone;

    function getPrefixFromCountry(country: string) :string {
      switch (country) {
        case 'PL': return '+48';
        default: return '';
      }
    }

    let prefix = getPrefixFromCountry(country);
    return `${prefix} ${phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}`;
  }

}
