export const componentTemplate = (name) => {
  return `
import { useState } from 'react';

export const ${name} = () => {
  const [data, setData] = useState(null);

  return (
    <div className="${name.toLowerCase()}">
      <h1>${name} Component</h1>
    </div>
  );
};
`.trim();
};

export default componentTemplate;