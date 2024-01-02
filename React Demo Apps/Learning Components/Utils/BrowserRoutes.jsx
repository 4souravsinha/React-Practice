import App from "../src/App";
import LearningComponents from "../src/LearningComponents/LearningComponents";
import StateManagement from "../src/StateManagement/StateManagement";
import States1 from "../src/StateManagement/States1";
import StateManagementContents from "../src/StateManagement/Contents";
import States2 from "../src/StateManagement/States2";
import States3 from "../src/StateManagement/States3";
import States4 from "../src/StateManagement/States4";

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
  },
  {
    path: '/state-management/states2',
    element: <States2/>,
    name: 'States 2'
  },
  {
    path: '/state-management/states3',
    element: <States3/>,
    name: 'Are state of variables copied or referenced?'
  },
  {
    path: '/state-management/states4',
    element: <States4/>,
    name: 'React eases 2 way binding'
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
