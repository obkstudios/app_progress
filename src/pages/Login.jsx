import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import { appName } from "../config"
import { Eye, EyeOff } from "lucide-react"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [loginError, setLoginError] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
    setLoginError("")
    try {
      setLoading(true)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) {
        console.log("Login error: ", error)
        setLoginError("Invalid email or password. Please try again.")
        return
      }
      navigate("/home")
    }
    catch (err) {
      console.log("Something went wrong.")
      console.log(err)
      setLoginError("Unable to connect. Please check your internet connection and try again.")
    }
    finally {
      setLoading(false)
    }


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

        <div>

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



        {loginError && <p className="text-red-600 text-sm mt-2">{loginError}</p>}
        <div>
          <blockquote className="my-8 border-l-4 border-amber-400 pl-4 pr-2">
            <p className="text-center text-sm sm:text-base italic leading-relaxed text-gray-600">
              “Tell me and I forget, teach me and I may remember,
              involve me and I learn.”
            </p>

            <footer className="mt-3 text-right text-sm font-medium text-[#1e1b4b]">
              — Benjamin Franklin
            </footer>
          </blockquote>
        </div>
        <button disabled={loading} type="submit" className="w-full flex justify-center items-center gap-2 transition-transform duration-150 ease-out hover:scale-[1.02] rounded-3xl px-4 py-2 mt-5 bg-amber-400 text-lg font-semibold border-2 text-white">
          {
            loading ? <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Logging In</> : "Log In"
          }
        </button>
      </form >
    </div>




  )
}



export default Login