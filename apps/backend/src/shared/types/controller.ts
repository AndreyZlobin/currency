import { Router } from "express";

import { Route } from "../../common/types/router.types";

interface IController {
  path: string;
  router: Router;
  initializeRoutes(routes: Route[]): void;
}

export { IController };
