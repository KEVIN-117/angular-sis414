import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'htmlTransform',
  standalone: true
})
export class HtmlTransformPipe implements PipeTransform {
  private sanitizerHtml: DomSanitizer = inject(DomSanitizer)

  transform(value: string): unknown {
    return this.sanitizerHtml.bypassSecurityTrustHtml(value);
  }

}
