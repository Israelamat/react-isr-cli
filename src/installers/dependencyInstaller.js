import { execSync } from "child_process";

export const installDependencies = (deps = []) => {
    if (!deps.length) return;

    const uniqueDeps = [...new Set(deps)];

    console.log(`Installing: ${uniqueDeps.join(", ")}`);

    execSync(`npm install ${uniqueDeps.join(" ")}`, {
        stdio: "inherit",
    });
};