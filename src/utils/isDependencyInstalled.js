import fs from "fs";
import path from "path";

let cache = null;

export const getPackageJson = () => {
    if (cache) return cache;

    const pkgPath = path.resolve(process.cwd(), "package.json");
    cache = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

    return cache;
};

export const isDependencyInstalled = (dep) => {
    try {
        const pkg = getPackageJson();

        return Boolean(
            pkg.dependencies?.[dep] ||
            pkg.devDependencies?.[dep]
        );
    } catch (err) {
        return false;
    }
};

export default isDependencyInstalled;