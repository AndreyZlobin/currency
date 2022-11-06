import { Route } from "@src/infra";
import { Router } from "express";

export interface IController {
  path: string;
  router: Router;
  initializeRoutes(routes: Route[]): void;
}
