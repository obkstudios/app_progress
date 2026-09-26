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
        <p className="text-center text-sm m-5 mx-auto px-6 max-w-100">Lectify turns recorded lectures into clean, structured notes, with assignments, quizzes and exam tips pulled out for you</p>
        <div className="text-center font-medium text-sm "><Link to="/signup" className="bg-secondary active:bg-teal-700 text-white px-4 py-2 rounded-3xl">Get Started. It's Free! </Link></div>
        <p className="text-center text-3xl m-10 mx-auto  px-6 max-w-100">Built for students</p>
      </section>

      <section>
        <div className="flex justify-center">
          <div className="w-60 aspect-414/896 border-gray-900 border-2 rounded-3xl bg-gray-200"></div>
        </div>
      </section>
    </>
  )
}

export default Landing