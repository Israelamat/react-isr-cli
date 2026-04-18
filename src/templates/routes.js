export const routesTemplate = {
  base: (name) => `import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

const User = lazy(() => import("./components/user"));

export const userRoutes: RouteObject[] = [
  {
    path: "/user",
    element: (
      <Suspense fallback={<div>Loading user...</div>}>
        <User />
      </Suspense>
    ),
  },
];

export default User;
`
};