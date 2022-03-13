// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { DB_CONFIG } from "../../../config";
import { logger } from "../../../infra/logger/logger.service";
import { database } from "../index";

export const createSeed = async (Model, seeds, dropCollection = true) => {
  const models = [];

  for (const seed of seeds) {
    models.push(new Model(seed));
  }

  const { DB_CONNECT } = DB_CONFIG;
  const { collectionName } = Model.collection;

  try {
    const res = await database.connect(DB_CONNECT);

    logger.log("[seed]: connected to db in development environment");

    if (dropCollection) {
      await res.connection.dropCollection(collectionName);
      logger.log(`[seed]: collection [${collectionName}] has benn dropped`);
    }
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }

  for await (const [index, model] of models.entries()) {
    await model.save(() => {
      if (index === models.length - 1) {
        logger.log(`[seed: ${collectionName}] - DONE`);

        database
          .disconnect()
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
        process.exit(1);
      }
    });
  }
};
