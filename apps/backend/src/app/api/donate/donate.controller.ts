import { NextFunction, Request, Response } from "express";

import { EnumMethods } from "../../../common/types/router.types";
import { validatorHandler } from "../../../shared/validators";
import Controller from "../../core/controller/controller.abstract";
import { CreateDonateDto, DonateDto } from "./dto";
import { DonateService } from "./service";
import { createDonateSchema } from "./validations";

class DonateController extends Controller {
  constructor(private readonly donateService = new DonateService()) {
    super("/donate");
    /**
     * Create donate model
     * @typedef {object} CreateDonate
     * @property {integer} amount.required - amount property description
     * @property {string} currency.required - currency property description - enum:USD,EUR,GBP,RUB
     */
    /**
     * Donate model
     * @typedef {object} Donate
     * @property {integer} amount.required - amount property description
     * @property {string} currency.required - currency property description - enum:USD,EUR,GBP,RUB
     * @property {string} _id.required - id property description
     */
    /**
     * @typedef {object} Response
     * @property {boolean} ok.required
     * @property {integer} statusCode.required
     * @property {string} message.required
     */

    this.initializeRoutes([
      {
        path: `${this.path}`,
        method: EnumMethods.get,
        callback: this.getAllDonates.bind(this),
      },
      {
        path: `${this.path}`,
        method: EnumMethods.post,
        middleware: [validatorHandler(createDonateSchema)],
        callback: this.createDonate.bind(this),
      },
    ]);
  }

  /**
   * GET /api/v1/donate
   * @summary Donate get endpoint
   * @security BasicAuth
   * @tags Donate
   * @return {Response} 200 - success response - application/json
   * @return {Response} 400 - Bad request response
   * @example response - 200 - success response example
   * [
   *     {
   *       "_id": "uuid",
   *       "amount": 40,
   *       "currency": "USD"
   *     },
   *     {
   *        "_id": "uuid",
   *        "amount": 80.5,
   *        "currency": "RUB"
   *      }
   * ]
   *@example response - 400 - error response example
   *     {
   *       "ok": false,
   *       "statusCode": 400,
   *       "message": "Error"
   *     }
   */
  async getAllDonates(req: Request, res: Response, next: NextFunction): Promise<DonateDto | void> {
    try {
      const donates = await this.donateService.getAll();

      this.ok(res, donates);
    } catch (error) {
      return next(error);
    }
  }

  /**
   * POST /api/v1/donate
   * @summary Donate create endpoint
   * @security BasicAuth
   * @tags Donate
   * @param {CreateDonate} request.body.required - donate body
   * @return {Response} 201 - success response - application/json
   * @return {Response} 400 - Bad request response
   * @example response - 201 - success response example
   *     {
   *       "ok": true,
   *       "message": "Thank you for your donation!"
   *     }
   *@example response - 400 - error response example
   *     {
   *       "ok": false,
   *       "statusCode": 400,
   *       "message": "Error"
   *     }
   */
  async createDonate(
    { body }: Request<unknown, unknown, CreateDonateDto>,
    res: Response,
    next: NextFunction,
  ): Promise<DonateDto | void> {
    try {
      await this.donateService.createDonate(body);

      this.created(res, { ok: true, message: "Thank you for your donation!" });
    } catch (error) {
      return next(error);
    }
  }
}

export { DonateController };
