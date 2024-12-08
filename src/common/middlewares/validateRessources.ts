import { AnyZodObject } from 'zod'
import { Request, Response, NextFunction } from 'express'

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (e: any) {
      next({ status: 400, message: e.errors })
    }
  }
