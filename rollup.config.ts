import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.tsx",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        module: "CommonJS",
        target: "ES2016",
      },
    }),
    commonjs({
      extensions: [".js", ".ts", ".tsx"],
      dynamicRequireTargets: [
        "node_modules/@hubspot/api-client/**",
        "node_modules/@hubspot/api-client/lib/**",
        "node_modules/@hubspot/api-client/lib/src/discovery/crm/CrmDiscovery.js",
        "node_modules/@hubspot/api-client/lib/crm/contacts/**",
        "node_modules/@hubspot/api-client/lib/crm/contacts/basicApi.js",
      ],
      ignoreDynamicRequires: true,
    }),
  ],
};
