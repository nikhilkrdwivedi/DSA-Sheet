import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Router from './Routers/Router.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { LoaderProvider } from './contexts/LoaderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <LoaderProvider>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </LoaderProvider>
  </StrictMode>,
)
