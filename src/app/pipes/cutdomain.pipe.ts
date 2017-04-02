import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutdomain'
})
export class CutdomainPipe implements PipeTransform {

  transform(value: string): string {
    if (value == null) { return null; }
    return value.split('@')[0].charAt(0).toUpperCase() + value.split('@')[0].substr(1).toLowerCase();
  }

}
