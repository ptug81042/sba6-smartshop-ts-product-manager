// Custom error class to represent system-level errors in our app.
// Extends the built-in Error class with additional context: HTTP status and fatal flag.
export class AppSystemError extends Error {
  status: number;
  fatal: boolean;

  constructor(msg: string, status = 500, fatal = false) {
    super(msg); // Set the error message via the base Error class
    this.name = 'AppSystemError'; // Give our custom error a recognizable name
    this.status = status; // HTTP-style status code (defaults to 500)
    this.fatal = fatal; // Flag for whether this error should crash the app or not

    // Clean up the stack trace for better debugging (Node.js-specific)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppSystemError);
    }
  }
}

// Utility function to standardize how we log different types of errors.
export function reportError(err: unknown): void {
  if (err instanceof AppSystemError) {
    // Log custom system errors with specific information.
    console.error(`[SystemError] ${err.status} — ${err.message}`);
  } else if (err instanceof Error) {
    // Handle any other built-in or user-thrown errors.
    console.error(`[Error] ${err.name} — ${err.message}`);
  } else {
    // If the error doesn't inherit from Error, it's probably something wweird.
    console.error("[Unknown] Unrecognized error:", err);
  }
}

// Centralized place to respond to errors without necessarily crashing the app.
export function handleErrorGracefully(err: unknown): void {
  reportError(err);

  // If it's a known system error and not fatal, we can recover and move on.
  if (err instanceof AppSystemError && !err.fatal) {
    console.warn("Handled error gracefully.");
  } else {
    // For anything else, log that this is serious.
    console.warn("A serious issue occurred.");
  }
}
