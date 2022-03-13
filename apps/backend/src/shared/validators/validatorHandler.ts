import { Request, Response } from "express";
import { validationResult } from "express-validator";

export function validatorHandler(req: Request, res: Response): Response | void {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors });
  }
}
