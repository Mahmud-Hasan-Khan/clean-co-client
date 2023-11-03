import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import myCreatedRoute from './router/Route';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreatedRoute} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
