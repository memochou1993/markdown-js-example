import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import HtmlUtils from './html-utils';

class MarkdownUtils {
  /**
   * Converts a markdown string to a safe HTML string.
   */
  static toSafeHtml(markdown) {
    return HtmlUtils.sanitize(MarkdownUtils.toHtml(markdown), {
      ADD_ATTR: ['target'],
    });
  }

  /**
   * Converts a markdown string to an HTML string.
   */
  static toHtml(markdown) {
    const marked = new Marked(
      markedHighlight({
        langPrefix: 'lang-',
        highlight(code, lang) {
          const options = {
            language: hljs.getLanguage(lang) ? lang : 'javascript',
          };
          return hljs.highlight(code, options).value;
        },
      }),
    );
    const renderer = {
      link({ href, title, text }) {
        return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      },
    };
    return marked
      .use({ renderer })
      .parse(markdown);
  }
}

export default MarkdownUtils;
