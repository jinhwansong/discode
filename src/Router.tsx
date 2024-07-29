import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/layout';
import * as Route from './pages';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Route.Login />,
      },
      {
        path: '/register',
        element: <Route.Register />,
      },
      { path: '/service/friend', element: <Route.Friend /> },
      {
        path: '/service/store',
        element: <Route.Store />,
      },
      {
        path: '/service/dm/:id',
        element: <Route.Dm />,
      },
      {
        path: '/server/:name',
        element: <Route.Server />,
      },
    ],
  },
]);

export default Router;
