import ReactDOM from 'react-dom/client'
import LearningComponents from './LearningComponents/LearningComponents.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <LearningComponents />
  },
  {
    path: '/learning-components',
    element: <LearningComponents />
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
