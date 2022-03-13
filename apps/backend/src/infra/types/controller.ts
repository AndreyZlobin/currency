import { Router } from "express";

import { Route } from "./router";

interface IController {
  path: string;
  router: Router;
  initializeRoutes(routes: Route[]): void;
}

export { IController };
