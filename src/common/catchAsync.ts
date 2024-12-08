import { Request, Response, NextFunction } from 'express';

import { AppError } from './appError';

export const catchAsync = (fn: Function) => function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch((err: AppError) => next({
        status: err.status || 500,
        message: err.message,
    }));
}