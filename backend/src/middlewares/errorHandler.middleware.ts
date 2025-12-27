import type{ErrorRequestHandler, Response} from "express";
import { ErrorCodeEnum } from "../enums/error-code.enum.js";
import {z, ZodError} from "zod";
import { httpStatus } from "../config/Https.config.js";


const errorHandler: ErrorRequestHandler = (err, req, res, next): any => {
    if (err instanceof ZodError) {
        const formattedErrors = err.issues.map((error) => ({
            field: error.path.join('.'),
            message: error.message,
        }));
        return res.status(httpStatus.BAD_REQUEST).json({
            errors: formattedErrors,
            message: 'Validation Error',
            errorCode : ErrorCodeEnum.VALIDATION_ERROR,
        });
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    return res.status(statusCode).json({
        status: 'error',
        message,
    });
}

export default errorHandler;