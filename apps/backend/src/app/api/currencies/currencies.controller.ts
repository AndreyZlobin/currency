import { NextFunction, Request, Response } from "express";

import { EnumMethods } from "../../../common/types/router.types";
import Controller from "../../core/controller/controller.abstract";
import { CurrencyService } from "./service";

class CurrencyController extends Controller {
  constructor(private readonly currencyService = new CurrencyService()) {
    super("/currency");
    /**
     * @typedef {object} Currency
     * @property {string} name.required
     * @property {string} code.required - enum:USD,EUR,GBP,RUB
     * @property {string} symbol.required
     * @property {integer} rate.required
     * @property {string} _id.required
     */
    /**
     * GET /api/v1/currency
     * @summary Currency currency endpoint
     * @security BasicAuth
     * @tags Currency
     * @return {array<Currency>} 200 - success response - application/json
     * @return {Response} 400 - Bad request response
     * @example response - 200 - success response example
     * [
     *     {
     *       "name": "US Dollar",
     *       "code": "USD",
     *       "symbol": "$",
     *       "rate": 1
     *     }
     * ]
     * @example response - 400 - fail response example
     *    {
     *       "ok": false,
     *       "statusCode": 400,
     *       "message": "Error"
     *     }
     */
    this.initializeRoutes([
      {
        path: this.path,
        method: EnumMethods.get,
        callback: this.getAllCurrencies.bind(this),
      },
    ]);
  }

  async getAllCurrencies(req: Request, res: Response, next: NextFunction): Promise<string | void> {
    try {
      const result = await this.currencyService.getAllCurrencies();

      this.ok(res, result);
    } catch (error) {
      return next(error);
    }
  }
}

export { CurrencyController };
