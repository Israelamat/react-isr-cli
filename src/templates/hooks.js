export const hooksTemplate = {
  base: (name) => {
    const lowerName = name.toLowerCase();
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return `
import { useEffect, useState, useCallback } from "react";
import { ${name}Service } from "../services/${lowerName}.services";

export const use${capitalizedName} = <T>() => {
  const [items, setItems] = useState<T[]>([]);
  const [item, setItem] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getAll = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const data: T[] = await ${name}Service.getAll();
      setItems(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getById = useCallback(async (id: number | string): Promise<void> => {
    try {
      setLoading(true);
      const data: T = await ${name}Service.getById(id);
      setItem(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const create = async (payload: Partial<T>): Promise<T> => {
    const data: T = await ${name}Service.create(payload);
    await getAll();
    return data;
  };

  const update = async (id: number | string, payload: Partial<T>): Promise<T> => {
    const data: T = await ${name}Service.update(id, payload);
    await getAll();
    return data;
  };

  const remove = async (id: number | string): Promise<void> => {
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