import { environments } from '../../../../config/environments';

export const getEnv = (name: keyof typeof environments): string =>
  process.env[name] as string;
