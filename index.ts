export * from './src/markdown-to-html.pipe';

import { NgModule } from '@angular/core';
import { MarkdownToHtmlPipe } from './src/markdown-to-html.pipe';

@NgModule({
    declarations: [MarkdownToHtmlPipe],
    exports: [MarkdownToHtmlPipe]
})
export class MarkdownToHtmlModule { }
