export class AppSystemError extends Error {
  status: number;
  fatal: boolean;

  constructor(msg: string, status = 500, fatal = false) {
    super(msg);
    this.name = 'AppSystemError';
    this.status = status;
    this.fatal = fatal;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppSystemError);
    }
  }
}

export function reportError(err: unknown): void {
  if (err instanceof AppSystemError) {
    console.error(`[SystemError] ${err.status} — ${err.message}`);
  } else if (err instanceof Error) {
    console.error(`[Error] ${err.name} — ${err.message}`);
  } else {
    console.error("[Unknown] Unrecognized error:", err);
  }
}

export function handleErrorGracefully(err: unknown): void {
  reportError(err);
  if (err instanceof AppSystemError && !err.fatal) {
    console.warn("Handled error gracefully.");
  } else {
    console.warn("A serious issue occurred.");
  }
}
