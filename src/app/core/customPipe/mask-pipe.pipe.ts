import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPipe',
  standalone: true
})
export class MaskPipePipe implements PipeTransform {

  transform(value: string, visibleChars: number = 4, makeString: string = '*'): string {
    if (!value) return value
    const maskedSection = makeString.repeat(value.length - visibleChars)
    return maskedSection + value.slice(-visibleChars)
  }

}
