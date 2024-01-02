import { Link } from "react-router-dom"
import tuts from "../Utils/BrowserRoutes"
const App = () => {
  
  return (
    <>
      <h1>Welcome to React Tutorials....</h1>
      <h2>Links to tutorials</h2>
      <ul>
        {tuts.map((tut, index) => (
          index !== 0 &&
          <li key={index}>
            <Link to={tut.path}>{tut.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
