import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  // Static export serves local media directly; layout dimensions are set in CSS.
  { rules: { "@next/next/no-img-element": "off" } },
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts", "out/**"] },
];

export default config;
