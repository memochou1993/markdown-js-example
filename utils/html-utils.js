import DOMPurify from 'dompurify';

class HtmlUtils {
  /**
   * Sanitizes a string to prevent XSS attacks.
   */
  static sanitize(rawHtml, options) {
    return DOMPurify.sanitize(rawHtml, options);
  };
}

export default HtmlUtils;
