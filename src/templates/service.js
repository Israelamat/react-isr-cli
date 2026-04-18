export const serviceTemplate = {
  // --- FETCH TEMPLATE + CRUD ---
  fetch: (name) => {
    const lowerName = name.toLowerCase();
    return `
export const ${name}Service = {
  getAll: async <T>(): Promise<T[]> => {
    const response = await fetch('https://api.example.com/${lowerName}');
    if (!response.ok) throw new Error('Error en la petición');
    return await response.json();
  },

  getById: async <T>(id: number | string): Promise<T> => {
    const response = await fetch(\`https://api.example.com/${lowerName}/\${id}\`);
    if (!response.ok) throw new Error('Error al obtener el recurso');
    return await response.json();
  },

  create: async <T>(payload: Partial<T>): Promise<T> => {
    const response = await fetch('https://api.example.com/${lowerName}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
  },

  update: async <T>(id: number | string, payload: Partial<T>): Promise<T> => {
    const response = await fetch(\`https://api.example.com/${lowerName}/\${id}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
  },

  delete: async (id: number | string): Promise<boolean> => {
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
  getAll: async <T>(): Promise<T[]> => {
    const { data } = await API.get(\`/${lowerName}\`);
    return data;
  },

  getById: async <T>(id: number | string): Promise<T> => {
    const { data } = await API.get(\`/${lowerName}/\${id}\`);
    return data;
  },

  create: async <T>(payload: Partial<T>): Promise<T> => {
    const { data } = await API.post(\`/${lowerName}\`, payload);
    return data;
  },

  update: async <T>(id: number | string, payload: Partial<T>): Promise<T> => {
    const { data } = await API.put(\`/${lowerName}/\${id}\`, payload);
    return data;
  },

  delete: async (id: number | string): Promise<void> => {
    await API.delete(\`/${lowerName}/\${id}\`);
  }
};
`.trim();
  }
};

export default serviceTemplate;