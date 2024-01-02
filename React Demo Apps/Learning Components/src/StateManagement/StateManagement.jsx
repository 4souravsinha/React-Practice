import { Link, Outlet } from "react-router-dom"

// import { stateManagementChildren as children } from "../../Utils/BrowserRoutes"
const StateManagement = () => {

  return (
    <div>
      <Link to='/state-management' style={{textAlign:'center'}}>
        <h1>State Management</h1>
      </Link>
      <Outlet />
    </div>
  )
}

export default StateManagement
