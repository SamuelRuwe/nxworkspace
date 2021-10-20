import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'days'})
export class DaysPipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value === 'string') value = Number(value);
    if (typeof value !== 'number') return 'unknown';
    if (value <= 0 || isNaN(value)) return 'unknown';
    const prefix = value;
    let suffix = ' day';
    if (value > 1) {
      suffix += 's';
    }
    return prefix + suffix;
  }
}
