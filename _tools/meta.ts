import {
  BuildOptions,
  EntryPoint,
} from "https://deno.land/x/dnt@0.31.0/mod.ts";

import { expandGlobSync } from "https://deno.land/std@0.181.0/fs/expand_glob.ts";
import {
  fromFileUrl,
  join,
  parse,
  relative,
} from "https://deno.land/std@0.181.0/path/mod.ts";

function path2EntryPoint(path: string): EntryPoint {
  const parsed = parse(path);
  const name = join(parsed.dir, parsed.name.replaceAll("_", "-"));

  const entryPoint: EntryPoint = {
    name: toRelative(name),
    path: toRelative(path),
  };

  return entryPoint;
}

function toRelative(path: string): string {
  return path.startsWith("./") ? path : "./" + path;
}

export const makeOptions = (version: string): BuildOptions => {
  const root = fromFileUrl(import.meta.resolve("../"));
  const entries = expandGlobSync("**/!(*_test.ts)is_*.ts", {
    includeDirs: false,
    root,
  });

  const entryPoints = [...entries]
    .map(({ path }) => relative(root, path))
    .map(path2EntryPoint);

  return {
    test: false,
    shims: {},
    typeCheck: true,
    entryPoints,
    outDir: "./npm",
    package: {
      name: "@miyauci/isx",
      version,
      description: "Collection of validation functions for JavaScript data",
      license: "MIT",
      sideEffects: false,
      type: "module",
      author: {
        name: "TomokiMiyauci",
        email: "contact@miyauchi.dev",
        url: "https://miyauchi.dev/",
      },
      main: undefined,
      module: undefined,
      types: undefined,

      repository: {
        type: "git",
        url: "https://github.com/TomokiMiyauci/isx.git",
      },
      bugs: {
        url: "https://github.com/TomokiMiyauci/isx/issues",
      },
      homepage: "https://github.com/TomokiMiyauci/isx",
      keywords: [
        "is",
        "validate",
        "validation",
        "utility",
        "collection",
        "type-guard",
      ],
      publishConfig: { access: "public" },
    },
    packageManager: "pnpm",
  };
};
