import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import { appName } from "../config"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [loginError, setLoginError] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    async function checkSession() {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.log(error.message)
        return
      }
      if (data.session) {
        navigate("/home")
      }
    }
    checkSession()
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setLoginError(error.message)
      return
    }

    navigate("/home")
  }

  return (
    <div className="flex justify-center items-center min-h-screen  bg-[#fdfaf3] ">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-4xl bg-white border border-[#1e1b4b]/10 p-8 shadow-sm">
        {/* forms */}

        {/* Header */}
        <div className="m-5">
          <h1 className="text-2xl font-bold text-center text-[#1e1b4b]">Welcome back!</h1>
          <h3 className="text-center">Log in to your {appName} account</h3>
        </div>
        {/* email */}
        <div className="mb-4 ">
          <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com" required />
        </div>

        {/* password */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-[#1e1b4b]" htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" required />
        </div>
        {{ loginError } && <p>{loginError}</p>}
        <button className="w-full flex justify-center transition-transform duration-150 ease-out hover:scale-[1.02] rounded-3xl px-4 py-2 mt-5 bg-amber-400 text-lg font-semiboldborder-2 text-white">
          Log In
        </button>
      </form >
    </div>

  )
}



export default Login