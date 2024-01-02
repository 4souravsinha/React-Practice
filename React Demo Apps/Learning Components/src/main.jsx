import ReactDOM from 'react-dom/client'
import LearningComponents from './LearningComponents/LearningComponents.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import StateManagement from './StateManagement/StateManagement.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/learning-components',
    element: <LearningComponents />
  },
  {
    path: '/state-management',
    element: <StateManagement/>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
