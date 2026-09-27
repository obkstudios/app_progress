import { Link } from "react-router-dom"
import { appName } from "../config"

function Landing() {
  return (
    <>
      {/* Navbar */}
      <div>
        <nav className="flex justify-between items-center p-5">
          <div className="text-xl text-primary font-bold">{appName}</div>
          <Link to="/login" className="text-l text-primary">Log in</Link>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="">
        <h1 className="text-3xl text-center"><br />Missed class?<br />Missed nothing.</h1>
        <p className="text-center text-sm m-5 mx-auto px-6 max-w-100">Lectify turns recorded lectures into clean, structured notes, with assignments, quizzes and exam tips pulled out for you</p>
        <div className="text-center font-medium text-sm "><Link to="/signup" className="bg-secondary active:bg-teal-700 text-white px-4 py-2 rounded-3xl">Get Started. It's Free! </Link></div>
        <p className="text-center text-3xl m-10 mx-auto  px-6 max-w-100">Built for students</p>
      </section>

      {/* Mobile phone mockup */}
      <section>
        <div className="flex justify-center">
          <div className="relative w-60 aspect-414/896 border-fuchsia-300 border-2 rounded-3xl bg-zinc-950">
            <div className="absolute w-55 h-[502px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-mauve-900"></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-2xl font-bold mt-10 ml-5">How it works</h2>
        <div className="flex flex-col justify-center text-center gap-y-6">
          <div>
            <p className="m-4 font-bold">1. Record</p>
            <img className=" rounded-3xl max-w-90 mx-auto" src="src/assets/Record.jpg" alt="A classmate records the lecture from their phone or laptop." />
          </div>

          <div>
            <p className="m-4 font-bold">2. Process</p>
            <img className="rounded-3xl max-w-90 mx-auto" src="src/assets/Process.jpg" alt="AI turns the recording into clean, structured notes." />
          </div>

          <div>
            <p className="m-4 font-bold">3. Read</p>
            <img className="rounded-3xl max-w-90 mx-auto" src="src/assets/Read.jpg" alt="Read the finished notes in your course feed, anytime." />
          </div>
        </div>
      </section>

      {/* For Students */}
      <section className="">
        <div className="w-90 h-80 bg-amber-100 rounded-3xl my-20 mx-auto">
          <div className="p-10">
            <div className="mb-5">For Everyone</div>
            <li>All your courses in one place<span class="text-green-500 font-bold text-xl">&#x2713;</span></li>
            <li>Notes from every lecture, organized by date</li>
            <li>Choose from options of Brief, Standard, or Detailed notes</li>
            <li>Assignments and deadlines pulled out for you</li>
            <li>Share notes to your WhatsApp group</li>
          </div>
        </div>
      </section>

    </>
  )
}

export default Landing