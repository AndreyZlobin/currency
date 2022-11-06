import Controller from "@core/controller/controller.abstract";
import { EnumMethods } from "@infra/types";
import { NextFunction, Request, Response } from "express";

import { RegisterUserDto, UserLoginDto } from "./dto";
import { AuthService } from "./services";

export class AuthController extends Controller {
  constructor(private readonly authService = new AuthService()) {
    super("/auth");
    this.initializeRoutes([
      {
        path: `${this.path}/register`,
        method: EnumMethods.post,
        callback: this.registerUser.bind(this),
      },
      {
        path: `${this.path}/login`,
        method: EnumMethods.post,
        callback: this.loginUser.bind(this),
      },
      {
        path: `${this.path}/reset_password`,
        method: EnumMethods.post,
        callback: this.resetPassword.bind(this),
      },
      {
        path: `${this.path}/logout`,
        method: EnumMethods.post,
        callback: this.logout.bind(this),
      },
    ]);
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = { name: 1 };

      this.created(res, data);
    } catch (error) {
      return next(error);
    }
  }

  async loginUser(
    { body }: Request<unknown, unknown, UserLoginDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await this.authService.userLogin(body);

      this.ok(res, data);
    } catch (error) {
      return next(error);
    }
  }

  async resetPassword(
    { body }: Request<unknown, unknown, RegisterUserDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await this.authService.register(body);

      this.created(res, data);
    } catch (error) {
      return next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      this.ok(res, true);
    } catch (error) {
      return next(error);
    }
  }
}
