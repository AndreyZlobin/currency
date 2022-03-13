import { Request, Response } from "express";
import { ValidationError, validationResult } from "express-validator";

export function validatorHandler(req: Request, res: Response): Response | void {
  const errorFormatter = ({ location, msg, param }: ValidationError) => {
    return `${location}[${param}]: ${msg}`;
  };
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, statusCode: 400, message: errors });
  }
}
