import { Link } from "react-router-dom"

function Landing() {
  return (
    <div>
      <nav className="flex justify-between items-center p-5">
        <div className="text-2xl text-primary font-bold">Lectify</div>
        <Link to="/login" className="text-l text-primary">Log in</Link>
      </nav>
    </div>
  )
}

export default Landing