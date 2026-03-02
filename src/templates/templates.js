import { componentTemplate } from './component.js';
import { serviceTemplate } from './service.js';
import { interfaceTemplate } from './interface.js';
import { routesTemplate } from './routes.js';
import { hooksTemplate } from './hooks.js';

export const templates = {
  component: (name) => componentTemplate.base(name),
  componenttailwind: (name) => componentTemplate.tailwind(name),

  componentcss: (name) => ({
    files: [
      { name: `${name}.tsx`, content: componentTemplate.css(name) },
      { name: `${name}.css`, content: componentTemplate.style(name) }
    ]
  }),

  feature: (name) => ({
    files: [
      { name: `components/${name}.tsx`, content: componentTemplate.tailwind(name) },
      { name: `hooks/${name}.ts`, content: hooksTemplate.base(name) },
      { name: `${name}.routes.tsx`, content: routesTemplate.base(name) },
      { name: `services/${name}.services.ts`, content: serviceTemplate.axios(name) },
      { name: `interfaces/${name}.ts`, content: interfaceTemplate(name) }
    ]
  }),
  servicef: (name) => serviceTemplate.fetch(name),
  servicea: (name) => serviceTemplate.axios(name),
  interface: interfaceTemplate,
  hooks: (name) => hooksTemplate.base(name),
  routes: (name) => routesTemplate.base(name)
};

export default templates;
