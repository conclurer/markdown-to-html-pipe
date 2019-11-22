import {Pipe, PipeTransform} from '@angular/core';
import * as marked from 'marked';

@Pipe({
    name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
    public transform(markdown: string, options?: MarkedOptions, inline?: boolean): string {
        if (markdown == null) return '';
        return (inline) ? marked.inlineLexer(markdown, [], options) : marked(markdown, options);
    }

    public static setOptions(options: MarkedOptions): void {
        marked.setOptions(options);
    }
}
