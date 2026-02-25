import { componentTemplate } from './component.js';
import { serviceTemplate } from './service.js';
import { interfaceTemplate } from './interface.js';

export const templates = {
  component: componentTemplate,
  servicef: (name) => serviceTemplate.fetch(name),
  servicea: (name) => serviceTemplate.axios(name),
  interface: interfaceTemplate
};

export default templates;
