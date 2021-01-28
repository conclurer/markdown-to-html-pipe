import {Pipe, PipeTransform} from '@angular/core';
import * as marked from 'marked';

@Pipe({
    name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
    public transform(markdown: string, options?: marked.MarkedOptions): string {
        if (markdown == null) return '';
        return marked(markdown, options);
    }

    public static setOptions(options: marked.MarkedOptions): void {
        marked.setOptions(options);
    }
}
