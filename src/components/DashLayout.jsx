import { Outlet } from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>Header</header>
      <main className="flex-1">
        <Outlet />
      </main>
      <nav>Navigation</nav>
    </div>
  )
}

export default DashboardLayout