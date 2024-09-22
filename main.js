import './style.css';
import MarkdownUtils from './utils/markdown-utils.js';

const text = `## Memo Chou\n
Hi there 🙋\n
I'm Memo Chou, a creative developer passionate about Go, PHP, Rust and JavaScript.\n
Any questions, or want to get involved, please get in touch.\n
[Click me](https://epoch.epoch.tw) for more details.\n
\`\`\`javascript
console.log('Hello, World!');
\`\`\`\n
`;

document.querySelector('#app').innerHTML = `
  <div>
    ${MarkdownUtils.toSafeHtml(text)}
  </div>
`;
