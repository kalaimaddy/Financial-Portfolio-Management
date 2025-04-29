import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currencySign: string = '₹'): string {
    if (value == null) return '';
    return currencySign + value.toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }
}
