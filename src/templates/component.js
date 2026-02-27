export const componentTemplate = {
  // Default Component Template 
  base: (name) => {
    return `import { useState } from 'react';

export const ${name} = () => {
  const [data, setData] = useState(null);

  return (
    <div className="${name.toLowerCase()}">
      <h1>${name} Component</h1>
    </div>
  );
};
`.trim();
  },

  // Component Template with Tailwind
  tailwind: (name) => {
    return `import React, { useState } from 'react';

export const ${name} = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-blue-600">${name} Component</h1>
    </div>
  );
};
`.trim();
  },

  // Component Template with CSS
  css: (name) => {
    const className = name.toLowerCase() + '-container';
    return `import React, { useState } from 'react';
import './${name}.css';

export const ${name} = () => {
  return (
    <div className="${className}">
      <h1>${name} Component</h1>
    </div>
  );
};
`.trim();
  },

  // Style Component
  style: (name) => {
    const className = name.toLowerCase() + '-container';
    return `.${className} {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.${className} h1 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2563eb;
}
`.trim();
  }
};

export default componentTemplate;