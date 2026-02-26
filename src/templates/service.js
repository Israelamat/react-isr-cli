export const serviceTemplate = {
    // --- FETCH TEMPLATE + CRUD ---
    fetch: (name) => {
        const lowerName = name.toLowerCase();
        return `
export const ${name}Service = {
  getAll: async () => {
    const response = await fetch('https://api.example.com/${lowerName}');
    if (!response.ok) throw new Error('Error en la petición');
    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(\`https://api.example.com/${lowerName}/\${id}\`);
    if (!response.ok) throw new Error('Error al obtener el recurso');
    return await response.json();
  },

  create: async (data) => {
    const response = await fetch('https://api.example.com/${lowerName}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  update: async (id, data) => {
    const response = await fetch(\`https://api.example.com/${lowerName}/\${id}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(\`https://api.example.com/${lowerName}/\${id}\`, {
      method: 'DELETE'
    });
    return response.ok;
  }
};
`.trim();
    },

    // --- AXIOS TEMPLATE + CRUD ---
    axios: (name) => {
        const lowerName = name.toLowerCase();
        return `
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.example.com',
});

export const ${name}Service = {
  getAll: async () => {
    const { data } = await API.get('/${lowerName}');
    return data;
  },

  getById: async (id) => {
    const { data } = await API.get(\`/${lowerName}/\${id}\`);
    return data;
  },

  create: async (payload) => {
    const { data } = await API.post('/${lowerName}', payload);
    return data;
  },

  update: async (id, payload) => {
    const { data } = await API.put(\`/${lowerName}/\${id}\`, payload);
    return data;
  },

  delete: async (id) => {
    const { data } = await API.delete(\`/${lowerName}/\${id}\`);
    return data;
  }
};
`.trim();
    }
};

export default serviceTemplate;