// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    typescript(),
    commonjs({
      extensions: [".js", ".ts"],
      dynamicRequireTargets: [
        "node_modules/@hubspot/api-client/**",
        "node_modules/@hubspot/api-client/lib/**",
        "node_modules/@hubspot/api-client/lib/crm/**",
        "node_modules/@hubspot/api-client/lib/crm/contacts/**",
        "node_modules/@hubspot/api-client/lib/crm/contacts/basicApi.js",
        "node_modules/@hubspot/api-client/lib/crm/contacts/basicApi.js",
      ],
      ignoreDynamicRequires: true,
    }),
  ],
};
