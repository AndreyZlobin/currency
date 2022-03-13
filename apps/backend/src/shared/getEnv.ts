import { Env } from "./types";

export const getEnv = (env: Env): string | undefined => process.env[env];
