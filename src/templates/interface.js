export const interfaceTemplate = (name) => {
  return `
export interface I${name} {
  id: number;
  name: string;
}
`.trim();
};