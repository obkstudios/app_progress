import { Link } from "react-router-dom"
import { useState } from "react"
import { programs } from "./programs"
import { appName } from "../config"

function SignUpForm() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [university, setUniversity] = useState("KNUST")
  const [year, setYear] = useState("")
  const [program, setProgram] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading
    const formData = {
      fullName: fullName,
      email: email,
      password: password,
      university: university,
      year: year,
      program: program,
    }
    console.log(formData)
  }

  const matchingPrograms = programs.filter((programName) => {
    return programName.toLowerCase().includes(program.toLowerCase())
  })

  return (
    <div className="flex justify-center items-center min-h-screen  bg-[#fdfaf3] ">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-4xl bg-white border border-[#1e1b4b]/10 p-8 shadow-sm">

        {/* Header */}
        <div className="m-5">
          <h1 className="text-3xl font-bold text-[#1e1b4b]">Create your {appName} account</h1>
          <p className="text-sm italic mb-5 ">Tell us a little about yourself so we can organize your Lectify experience</p>
        </div>

        {/* forms */}
        {/* name */}
        <div className="mx-auto w-full max-w-md">
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="full-name">Full Name </label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name" />
          </div>

          {/* email */}
          <div className="mb-4 ">
            <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com" />
          </div>

          {/* password */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              value={password}
              className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />
          </div>

          {/* university */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b] mb-1" htmlFor="university">University</label>
            <select
              id="university"
              className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            >
              <option value="" disabled>Select your university</option>
              <option value="KNUST">KNUST</option>
            </select>
          </div>

          {/* programme */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="program">Programme of Study </label>
            <input
              type="text"
              id="program"
              className=" border-[#1e1b4b]/50 border-2  w-full rounded-3xl px-4 py-2"
              value={program}
              onChange={(e) => { setProgram(e.target.value); setShowSuggestions(true) }}
            />
            {program !== "" && showSuggestions && (
              matchingPrograms.length > 0 ? (
                matchingPrograms.map((programName) =>
                (<p
                  key={programName}
                  onClick={() => {
                    setProgram(programName);
                    setShowSuggestions(false)
                  }}
                >
                  {programName}
                </p>)
                )
              ) : (
                <p>No matching programme found</p>
              )
            )}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="year">Current Year of Study</label>
            {/* <input type="text" id="year" className="border w-full rounded-lg max-w-md px-4 py-1" /> */}
            <select
              id="year"
              className="w-full border-[#1e1b4b]/50 border-2 rounded-3xl px-4 py-2"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="" disabled>Select your year</option>
              <option value="year-1">Year 1</option>
              <option value="year-2">Year 2</option>
              <option value="year-3">Year 3</option>
              <option value="year-4">Year 4</option>
              <option value="year-5">Year 5</option>
              <option value="year-6">Year 6</option>
            </select>
          </div>

          <button className="w-full rounded-3xl px-4 py-2 mt-5 bg-amber-400 text-lg font-semibold border-[#1e1b4b]/50 border-2 text-[#1e1b4b]">
            Sign Up
          </button>

          <div className="flex justify-center m-5">
            <p className="mr-1">Have an account?</p>
            <Link to="/Login" className="text-blue-900 font-medium">Log In</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm