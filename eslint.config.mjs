import { FlatCompat } from "@eslint/eslintrc";

const dir = import.meta.dirname;

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: dir,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    settings: {
      next: {
        rootDir: `${dir}/apps/frontend/`,
      },
    },
  }),
];

export default eslintConfig;
