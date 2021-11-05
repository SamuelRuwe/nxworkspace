import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ssnFormat' })
export class SsnFormatPipe implements PipeTransform {
  transform(value?: number): string {

    if (!value) return "XXX-XX-XXXX";

    const stringSSN = value.toString();

    if (stringSSN.length === 4) return `XXX-XX-${stringSSN}`

    if (stringSSN.length === 9) return `${stringSSN.slice(0, 3)}-${stringSSN.slice(3, 5)}-${stringSSN.slice(5)}`;

    return "XXX-XX-XXXX";
  }
}
