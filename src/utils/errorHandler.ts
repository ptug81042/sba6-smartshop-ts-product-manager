export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

export function logError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`[AppError] ${error.message} (Status ${error.statusCode})`);
  } else if (error instanceof Error) {
    console.error(`[Error] ${error.name}: ${error.message}`);
  } else {
    console.error(`[Unknown Error]`, error);
  }
}

export function handleErrorGracefully(error: unknown): void {
  logError(error);
  if (error instanceof AppError && error.isOperational) {
    console.warn("Handled gracefully:", error.message);
  } else {
    console.warn("Unexpected error. See logs.");
  }
}