/**
 * Custom application error class for structured error handling.
 */
export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode = 500, isOperational = true) {
        super(message);
        this.name = 'AppError';
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        // Maintain proper stack trace (especially useful in Node environments)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AppError);
        }
    }
}

/**
 * Logs error details in a consistent and developer-friendly format.
 * Useful for debugging or future error logging infrastructure.
 */
export function logError(error: unknown): void {
    if (error instanceof AppError) {
        console.error(`[AppError] ${error.message} (Status: ${error.statusCode})`);
    } else if (error instanceof Error) {
        console.error(`[Unhandeled Error] ${error.name}: ${error.message}`);
    } else {
        console.error(`[Unknown Error Type]`, error);
    }
}

/**
 * Handles errors gracefully depending on environment or logic flow.
 * Could be expanded in the future to support UI notifications or telemetry.
 */
export function handleErrorGracefully(error: unknown): void {
    logError(error);

    if (error instanceof AppError && error.isOperational) {
        console.warn("An operational error occurred:", error.message);
    } else {
        console.warn("A critical or unexpected error occurred. Please check logs.");
        // Optionally: rethrow or exit process in real backend app
    }
}