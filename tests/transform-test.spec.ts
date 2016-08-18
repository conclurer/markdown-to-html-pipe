import test = require('tape');
import Test = test.Test;
import 'zone.js';
import 'reflect-metadata';
import {MarkdownToHtmlPipe} from '../index';

test('undefined input', (t: Test) => {
    let mdString: string;
    let pipeInstance: MarkdownToHtmlPipe = new MarkdownToHtmlPipe();
    let result: string = pipeInstance.transform(mdString);
    t.equal(result, '');
    t.end();
});

test('transform test', (t: Test) => {
    let mdString: string = 'This is an **example**.';
    let pipeInstance: MarkdownToHtmlPipe = new MarkdownToHtmlPipe();

    // Execute test statement
    let result: string = pipeInstance.transform(mdString);
    t.equal(result, '<p>This is an <strong>example</strong>.</p>\n');
    t.end();
});
