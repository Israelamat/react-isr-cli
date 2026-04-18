export const interfaceTemplate = (name) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return `
export interface I${capitalizedName} {
  id: number;
  name: string;
}
`.trim();
};