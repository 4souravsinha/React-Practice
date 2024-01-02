import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BrowserRoutes from '../Utils/BrowserRoutes';

const router = createBrowserRouter(BrowserRoutes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
