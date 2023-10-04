import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    if (value[0] === value[0].toUpperCase()) {
      return value;
    } else {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
