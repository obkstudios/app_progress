import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import { appName } from "../config"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassworn] = useState("")
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

  return (
    <div className="flex justify-center items-center min-h-screen  bg-[#fdfaf3] ">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-4xl bg-white border border-[#1e1b4b]/10 p-8 shadow-sm">
        {/* forms */}
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
          <input
            type="password"
            id="password"
            value={password}
            className=" border-[#1e1b4b]/50 border-2 w-full rounded-3xl px-4 py-2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" required />
        </div>

        <button className="w-full flex justify-center transition-transform duration-150 ease-out hover:scale-[1.02] rounded-3xl px-4 py-2 mt-5 bg-amber-400 text-lg font-semibold border-[#1e1b4b]/50 border-2 text-[#1e1b4b]">
          Log In

        </button>
      </form >
    </div>

  )
}



export default Login