import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import ErrorPage from './components/Error/ErrorPage'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <HomePage />
      },
      {
        path: "user",
        element: <User />,
      },
      // {
      //   path: "/admin",
      //   element: <Admin />,
      // },1
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <DashBoard />
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
    ]
  },
]);
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
// <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// </Provider>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
