import { stateManagementChildren } from '../../Utils/BrowserRoutes'
import { Link } from 'react-router-dom'

const Contents = () => {
  return (
    <div>
      <ul>
        {stateManagementChildren.map((child) => {
          return (
            <li key={child.name}>
              <Link to={child.path}>{child.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Contents
