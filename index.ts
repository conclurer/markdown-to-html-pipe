import {Pipe, PipeTransform} from '@angular/core';
import marked = require('marked');

@Pipe({
    name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
    public transform(markdown: string, options?: MarkedOptions): string {
        return marked(markdown, options);
    }

    public static setOptions(options: MarkedOptions): void {
        marked.setOptions(options);
    }
}