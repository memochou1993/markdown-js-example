import { marked } from 'marked';
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
    const renderer = new marked.Renderer();
    renderer.link = ({ href, title, text }) => {
      return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    };
    return marked(markdown, { renderer });
  };
}

export default MarkdownUtils;
