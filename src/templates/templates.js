import { componentTemplate } from './component.js';
import { serviceTemplate } from './service.js';
import { interfaceTemplate } from './interface.js';

export const templates = {
  component: (name) => componentTemplate.base(name),
  componenttailwind: (name) => componentTemplate.tailwind(name),

  componentcss: (name) => ({
    files: [
      { name: `${name}.tsx`, content: componentTemplate.css(name) },
      { name: `${name}.css`, content: componentTemplate.style(name) }
    ]
  }),

  servicef: (name) => serviceTemplate.fetch(name),
  servicea: (name) => serviceTemplate.axios(name),
  interface: interfaceTemplate
};

export default templates;
