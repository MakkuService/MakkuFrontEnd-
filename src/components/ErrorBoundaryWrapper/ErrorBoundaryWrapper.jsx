import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import Button from '../ui/Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <div className="error-boundary">
        <div className="error-boundary__title">
          <h2 className="error-boundary__title">APP-ERROR </h2>
          <p className="error-boundary__message">{error.message}</p>

          <div className="error-boundary__block">
            Try to
            <Button className="button button_reload" onClick={resetErrorBoundary} variant="outline">
              Reload app
            </Button>
            or
            <Button className="link link_home" onClick={resetErrorBoundary} variant="outline" as={Link} to="/">
              Go to homepage
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ErrorBoundaryWrapper({
  children,
}) {
  return (
    <ErrorBoundary
      onReset={() => {}}
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
}
