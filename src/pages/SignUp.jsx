import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { programs } from "./programs"
import { appName } from "../config"
import { supabase } from "../lib/supabase"
import { Eye, EyeOff, MailCheck } from "lucide-react"

function SignUpForm() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [university, setUniversity] = useState("")
  const [uniList, setUniList] = useState([])
  const [year, setYear] = useState("")
  const [program, setProgram] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [signUpMessage, setSignUpMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    async function fetchUni() {
      const { data, error } = await supabase.from("universities").select("id, name")
      console.log("Universities:", data)

      if (error) {
        console.log(error)
        return
      }
      setUniList(data)


    }
    fetchUni();
  }, [])

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      fullName: fullName,
      email: email,
      password: password,
      university: university,
      year: Number(year),
      program: program,
    }
    supabaseSignUp(formData)
  }

  async function supabaseSignUp(formData) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          university_id: formData.university,
          year_group: formData.year,
          program: formData.program
        },
        emailRedirectTo: "http://localhost:5173/login"
      }
    })
    if (error) {
      console.log(error.message)
      return
    }
    if (!data.session) {
      setSignUpMessage("Account created! Please check your email to confirm your account")
    } else {
      navigate("/login")
    }
  }

  const matchingPrograms = programs.filter((programName) => {
    return programName.toLowerCase().includes(program.toLowerCase())
  })

  if (signUpMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf3] px-4">
        <div className="w-full max-w-md bg-white border border-[#1e1b4b]/10 rounded-3xl shadow-sm p-8 text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <MailCheck size={40} className="text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-[#1e1b4b] mb-3">
            Check your email!
          </h1>

          <p className="text-gray-600 mb-2">
            We've sent a confirmation link to
          </p>

          <p className="font-semibold text-[#1e1b4b] break-all mb-5">
            {email}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Click the confirmation link in your email to verify
            your account and start using {appName}.
          </p>

          <Link
            to="/login"
            className="block w-full rounded-3xl bg-amber-400 px-4 py-3 font-semibold text-[#1e1b4b] hover:bg-amber-500 transition-colors"
          >
            Go to Log In
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            Didn't receive the email? Check your spam or junk folder.
          </p>

        </div>
      </div>
    )
  }

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
              placeholder="Full Name" required />
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
              placeholder="example@gmail.com" required />
          </div>

          {/* password */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="password">Password </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" required />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* university */}
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#1e1b4b] mb-1" htmlFor="university">University</label>
            <select
              id="university"
              className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
              value={university}
              onChange={(e) => setUniversity(e.target.value)} required
            >
              <option value="" disabled>Select your university</option>
              {uniList.map((uni) =>
                <option
                  key={uni.id}
                  value={uni.id}
                >
                  {uni.name}
                </option>
              )}
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
              required
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
              required
            >
              <option value="" disabled>Select your year</option>
              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
              <option value="4">Year 4</option>
              <option value="5">Year 5</option>
              <option value="6">Year 6</option>
            </select>
          </div>

          <button className="w-full flex justify-center transition-transform duration-150 ease-out hover:scale-[1.02] rounded-3xl px-4 py-2 mt-5 bg-amber-400 text-lg font-semibold border-[#1e1b4b]/50 border-2 text-[#1e1b4b]">
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