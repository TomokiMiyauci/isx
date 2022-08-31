import { BuildOptions } from "https://deno.land/x/dnt@0.29.1/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "isxx",
    version,
    description: "TypeScript-first is functions collection",
    license: "MIT",
    sideEffects: false,
    author: {
      name: "TomokiMiyauci",
      email: "contact@miyauchi.dev",
      url: "https://miyauchi.dev/",
    },
    repository: {
      type: "git",
      url: "https://github.com/TomokiMiyauci/isx.git",
    },
    bugs: {
      url: "https://github.com/TomokiMiyauci/isx/issues",
    },
    homepage: "https://github.com/TomokiMiyauci/isx#readme",
    funding: {
      type: "patreon",
      url: "https://www.patreon.com/tomoki_miyauci",
    },
    keywords: [
      "is",
      "validate",
      "validation",
      "utility",
      "collection",
    ],
  },
  packageManager: "pnpm",
});
