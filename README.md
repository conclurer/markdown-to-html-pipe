# Markdown To HTML Pipe

Converts a Markdown string, outputs HTML.

## Usage

```typescript
import {Component} from '@angular/core';
import {MarkdownToHtmlPipe} from 'markdown-to-html-pipe';

@Component({
  selector: 'example',
  template: `<div [innerHTML]="content|MarkdownToHtml"></div>`,
  pipes: [MarkdownToHtmlPipe]
})
export class ExampleComponent {
  protected content: string = 'This will render **Markdown** content!';
}
```

Will be rendered as:

```html
<div>
  <p>This will render <strong>Markdown</strong> content!</p>
</div>
```

## Installation

Run

```
npm install --save markdown-to-html-pipe
```