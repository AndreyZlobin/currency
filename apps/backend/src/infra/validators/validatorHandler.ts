import { NextFunction, Request, Response } from "express";
import { SchemaOf, ValidationError } from "yup";

export const validatorHandler = <T>(schema: SchemaOf<T>) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(500).json({ ok: false, statusCode: 400, message: error.message });
    } else {
      return res.status(500).json({ ok: false, statusCode: 500, message: "Something went wrong" });
    }
  }
};
