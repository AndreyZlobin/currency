import moduleAlias from "module-alias";
import path from "path";

import tsConfig from "../../tsconfig.json";

const files = path.resolve(__dirname, "../..");

type ObjectKeysString<ObjType extends object> = Array<Extract<keyof ObjType, string>>;

const tsPaths = tsConfig.compilerOptions.paths;

const normalizePath = (key: string) => {
  return key.replace("./", "").replace("/*", "");
};

const objectOfAliases = Object.keys(tsPaths) as ObjectKeysString<typeof tsPaths>;

const aliases = objectOfAliases.reduce((acc, key) => {
  acc[normalizePath(key)] = path.resolve(files, normalizePath(tsPaths[key][0]));
  return acc;
}, {} as Record<string, string>);

moduleAlias.addAliases(aliases);
