import { Link } from "react-router-dom"
import { appName } from "../config"

function SignUpForm() {
  return (
    <form className="flex flex-row">
      <div className="mb-4">
        <label className="block" htmlFor="full-name">Full Name </label>
        <input type="text" id="full-name" className="border w-full rounded-lg max-w-md px-4 py-1" />
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="email">Email </label>
        <input type="email" id="email" className="border w-full rounded-lg max-w-md px-4 py-1" />
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="password">Password </label>
        <input type="password" id="password" className="border w-full rounded-lg max-w-md px-4 py-1" />
      </div>

      <div className="mb-4">
        <label className="block mb-1" htmlFor="university">University</label>
        <select id="university" className="w-full border rounded-lg px-4 max-w-md py-1">
          <option value="KNUST">KNUST</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="program">Programme of Study </label>
        <input type="text" id="program" className="border w-full rounded-lg max-w-md px-4 py-1" />
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="year">Current Year of Study</label>
        {/* <input type="text" id="year" className="border w-full rounded-lg max-w-md px-4 py-1" /> */}
        <select id="university" className="w-full border rounded-lg px-4 max-w-md py-1">
          <option value=""></option>
          <option value="year-1">Year 1</option>
          <option value="year-2">Year 2</option>
          <option value="year-3">Year 3</option>
          <option value="year-4">Year 4</option>
          <option value="year-5">Year 5</option>
          <option value="year-6">Year 6</option>
        </select>
      </div>

      <button className="w-full border rounded-lg px-4 max-w-md py-1 bg-amber-400">
        Sign Up
      </button>

      <div>
        <p>Have an account?</p>
        <Link to="/Login">Log In</Link>
      </div>
    </form>
  )
}

export default SignUpForm