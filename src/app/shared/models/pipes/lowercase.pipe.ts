import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercase',
})
export class LowercasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    return value.toLowerCase();
  }
}
