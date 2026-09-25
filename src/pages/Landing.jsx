import { Link } from "react-router-dom"
import { appName } from "../config"

function Landing() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center p-5">
          <div className="text-xl text-primary font-bold">{appName}</div>
          <Link to="/login" className="text-l text-primary">Log in</Link>
        </nav>
      </div>

      <section className="">
        <h1 className="text-3xl text-center"><br />Missed class?<br />Missed nothing.</h1>
        <p className="text-center m-5 mx-auto px-6 max-w-100">Lectify turns recorded lectures into clean, structured notes, with assignments, quizzex and exam tips pulled out for you</p>
        <h2 className="text-center font-medium">Get Started. It's free!</h2>
      </section>
    </>
  )
}

export default Landing