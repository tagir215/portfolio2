import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import fi from './locales/fi.json'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import PageFi from './pages/PageFi';
import PageEn from './pages/PageEn';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<PageFi/>
  },
  {
    path:"/en",
    element:<PageEn/>
  }
]);

root.render(
  <React.StrictMode>
      <App lang={fi}></App>
  </React.StrictMode>
);

reportWebVitals();
