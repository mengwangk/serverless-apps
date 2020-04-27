import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({dsn: "https://24188101bd464594ad642469f9a73d84@o384252.ingest.sentry.io/5215174"});
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }

  alert(message);
}
