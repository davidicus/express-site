import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Privacy from './components/Privacy/Privacy';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
]);
ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);
registerServiceWorker();
