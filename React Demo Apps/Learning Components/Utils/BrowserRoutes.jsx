import App from "../src/App";
import LearningComponents from "../src/LearningComponents/LearningComponents";
import StateManagement from "../src/StateManagement/StateManagement";
import States1 from "../src/StateManagement/States1";
import StateManagementContents from "../src/StateManagement/Contents";

export const stateManagementChildren = [
  {
    path: '/state-management',
    element: <StateManagementContents/>,
    name: 'Contents'
  },
  {
    path: '/state-management/states1',
    element:<States1 />,
    name: 'States 1'
  }
]

const BrowserRoutes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/learning-components',
    name: 'Learning Components',
    element: <LearningComponents />
  },
  {
    path: '/state-management',
    element: <StateManagement />,
    name: 'State Management',
    children: stateManagementChildren
  },
 
];

export default BrowserRoutes;
