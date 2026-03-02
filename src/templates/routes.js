export const routesTemplate = {
  base: (name) => `import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ${name}Page = lazy(() => import("./components/${name}Card"));

export const ${name.toLowerCase()}Routes: RouteObject[] = [
  {
    path: "${name.toLowerCase()}",
    element: <${name}Page />,
  },
];
`
};