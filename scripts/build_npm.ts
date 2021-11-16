import { build } from "https://deno.land/x/dnt/mod.ts";

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  test: false,
  compilerOptions: {
    sourceMap: true,
  },
  package: {
    name: "isxx",
    version: Deno.args[0]?.replace(/^v/, ""),
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
      "function",
      "utility",
      "collection",
    ],
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
