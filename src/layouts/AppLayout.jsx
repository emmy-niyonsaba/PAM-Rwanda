
import { Outlet } from "react-router-dom"
import Navbar from "../componets/Navbar"
function AppLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout
