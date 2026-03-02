export const hooksTemplate = {
  base: (name) => {
    const lowerName = name.toLowerCase();

    return `
import { useEffect, useState, useCallback } from "react";
import { ${name}Service } from "../services/${lowerName}Service";

export const use${name} = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAll = useCallback(async () => {
    try {
      setLoading(true);
      const data = await ${name}Service.getAll();
      setItems(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getById = useCallback(async (id) => {
    try {
      setLoading(true);
      const data = await ${name}Service.getById(id);
      setItem(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const create = async (payload) => {
    const data = await ${name}Service.create(payload);
    await getAll();
    return data;
  };

  const update = async (id, payload) => {
    const data = await ${name}Service.update(id, payload);
    await getAll();
    return data;
  };

  const remove = async (id) => {
    await ${name}Service.delete(id);
    await getAll();
  };

  useEffect(() => {
    getAll();
  }, [getAll]);

  return {
    items,
    item,
    loading,
    error,
    getAll,
    getById,
    create,
    update,
    remove
  };
};
`.trim();
  }
};