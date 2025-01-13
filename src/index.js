import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import SignIn from './Components/SignIn';
import Store from './Components/Ecommerce/Store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainpage/>
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/store',
    element: <Store />
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
