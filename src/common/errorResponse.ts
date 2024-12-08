
import { Response } from 'express';
import { AppError } from './appError';


export const _formatError = (errors: Error[] | Error): Error[] => {
    return Array.isArray(errors) ? errors : [errors];

}

export const sendErrorResponse = (
    response: Response,
    statusCode: number,
    errors: AppError[] | AppError
): void => {
    response.status(statusCode).json({
        status: statusCode,
        errors: _formatError(errors),
    });

}
