import { Outlet } from "react-router-dom"

// import { stateManagementChildren as children } from "../../Utils/BrowserRoutes"
const StateManagement = () => {

  return (
    <div>
      <h1>State Management</h1>
      <Outlet />
    </div>
  )
}

export default StateManagement
