import keys from "./keys";

const { DB_HOST, DB_NAME } = keys;

const DB_CONNECT = `mongodb://${DB_HOST}/${DB_NAME}`;

const DB_CONFIG = {
  DB_CONNECT,
};

export { DB_CONFIG, DB_CONNECT };
