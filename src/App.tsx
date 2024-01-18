import './App.css'
import { Link, Outlet } from 'react-router-dom'
function App() {

  return (
    <>
    <Link to="/form">Click To View Form Component</Link>
    <Outlet />
    </>
  )
}

export default App
