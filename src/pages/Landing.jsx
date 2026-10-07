import { Link } from "react-router-dom"
import { appName } from "../config"

function Landing() {
  return (
    <div className="min-h-screen bg-[#fdfaf3] text-[#1e1b4b]">
      {/* Navbar */}
      <div className="sticky top-0 z-30 bg-[#fdfaf3]/90 backdrop-blur border-b border-[#1e1b4b]/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#1e1b4b]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" aria-hidden="true"></span>
            {appName}
          </div>
          <Link to="/login" className="rounded-full border border-[#1e1b4b]/20 px-4 py-1.5 text-sm font-semibold text-[#1e1b4b] hover:border-[#1e1b4b] transition-colors">Log in</Link>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pt-14 pb-10 md:pt-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f59e0b]/20 blur-3xl" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1e1b4b] sm:text-5xl md:text-6xl">
            Missed class?<br /><span className="relative inline-block">Missed nothing.<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-[#f59e0b]/60 md:h-4" aria-hidden="true"></span></span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#1e1b4b]/70">Lectify turns recorded lectures into clean, structured notes, with assignments, quizzes and exam tips pulled out for you</p>
          <div className="mt-8">
            <Link to="/signup" className="inline-block rounded-full bg-[#1e1b4b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1e1b4b]/20 hover:bg-[#2e2a6b] active:scale-[0.98] transition">Get Started. It's Free! </Link>
          </div>
          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-[#1e1b4b]/50">Built for students</p>
        </div>
      </section>

      {/* Mobile phone mockup */}
      <section className="px-5 pb-16">
        <div className="flex items-center justify-center">
          {/* <!-- iPhone 15 Container --> */}
          <div className="relative h-[520px] w-64 rounded-[45px] border-8 border-[#1e1b4b] bg-[#1e1b4b] shadow-2xl shadow-[#1e1b4b]/25 sm:h-[600px] sm:w-72">
            {/* <!-- Dynamic Island --> */}
            <div className="absolute top-2 left-1/2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[#1e1b4b]"></div>

            {/* <!-- Screen Content --> */}
            <div className="relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-[37px] bg-[#fdfaf3] px-5 pt-12" aria-hidden="true">
              <div className="h-3 w-24 rounded-full bg-[#1e1b4b]/80"></div>
              <div className="h-2 w-16 rounded-full bg-[#1e1b4b]/25"></div>
              <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#1e1b4b]/5">
                <div className="mb-3 h-2.5 w-20 rounded-full bg-[#f59e0b]"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#1e1b4b]/15"></div>
                  <div className="h-2 w-11/12 rounded-full bg-[#1e1b4b]/15"></div>
                  <div className="h-2 w-4/5 rounded-full bg-[#1e1b4b]/15"></div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#1e1b4b]/5">
                <div className="mb-3 h-2.5 w-16 rounded-full bg-[#1e1b4b]/70"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#1e1b4b]/15"></div>
                  <div className="h-2 w-3/4 rounded-full bg-[#1e1b4b]/15"></div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#1e1b4b] p-4">
                <div className="mb-3 h-2.5 w-24 rounded-full bg-[#f59e0b]"></div>
                <div className="h-2 w-2/3 rounded-full bg-white/30"></div>
              </div>
            </div>

            {/* <!-- Left Side Buttons --> */}
            {/* <!-- Silent Switch --> */}
            <div className="absolute left-[-14px] top-20 h-8 w-[6px] rounded-l-md bg-[#1e1b4b]"></div>

            {/* <!-- Volume Up --> */}
            <div className="absolute left-[-14px] top-36 h-12 w-[6px] rounded-l-md bg-[#1e1b4b]"></div>

            {/* <!-- Volume Down --> */}
            <div className="absolute left-[-14px] top-52 h-12 w-[6px] rounded-l-md bg-[#1e1b4b]"></div>

            {/* <!-- Right Side Button (Power) --> */}
            <div className="absolute right-[-14px] top-36 h-16 w-[6px] rounded-r-md bg-[#1e1b4b]"></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#fdfaf3] px-5 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1e1b4b] text-center mb-12">How it works</h2>
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white ring-1 ring-[#1e1b4b]/10 shadow-sm" aria-hidden="true">
              <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="19" y="7" width="10" height="19" rx="5" />
                <path d="M13 21a11 11 0 0 0 22 0" stroke="#f59e0b" />
                <path d="M24 32v6M17 38h14" />
                <path d="M9 20v8M39 20v8" stroke="#f59e0b" strokeWidth="3" />
              </svg>
            </div>
            <p className="mt-6 flex items-center gap-2 text-lg font-bold text-[#1e1b4b]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f59e0b] text-sm text-[#1e1b4b]">1</span>
              Record
            </p>
            <p className="mt-2 max-w-64 text-sm text-[#1e1b4b]/70">A classmate records the lecture from their phone or laptop.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white ring-1 ring-[#1e1b4b]/10 shadow-sm" aria-hidden="true">
              <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 21v6M11 17v14M16 21v6" stroke="#f59e0b" strokeWidth="3" />
                <path d="M22 24h7M26 20l4 4-4 4" />
                <path d="M36 19h6M36 24h6M36 29h4" strokeWidth="3" />
                <path d="M38 7l1.2 2.8L42 11l-2.8 1.2L38 15l-1.2-2.8L34 11l2.8-1.2z" fill="#f59e0b" stroke="none" />
              </svg>
            </div>
            <p className="mt-6 flex items-center gap-2 text-lg font-bold text-[#1e1b4b]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f59e0b] text-sm text-[#1e1b4b]">2</span>
              Process
            </p>
            <p className="mt-2 max-w-64 text-sm text-[#1e1b4b]/70">AI turns the recording into clean, structured notes.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white ring-1 ring-[#1e1b4b]/10 shadow-sm" aria-hidden="true">
              <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 7h13l7 7v21a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
                <path d="M28 7v7h7" />
                <path d="M18 22h10M18 27h10M18 32h6" />
                <circle cx="34" cy="35" r="7" fill="#f59e0b" stroke="none" />
                <path d="M31 35l2.2 2.2L37.5 33" />
              </svg>
            </div>
            <p className="mt-6 flex items-center gap-2 text-lg font-bold text-[#1e1b4b]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f59e0b] text-sm text-[#1e1b4b]">3</span>
              Read
            </p>
            <p className="mt-2 max-w-64 text-sm text-[#1e1b4b]/70">Read the finished notes in your course feed, anytime.</p>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section className="bg-[#fdfaf3] px-5 pb-20">
        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2 md:items-stretch">
          <div className="flex flex-col rounded-3xl bg-white border border-[#1e1b4b]/10 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1e1b4b]">For Listeners</h3>
            <p className="mt-3 text-4xl font-extrabold text-[#1e1b4b]">Free</p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>All your courses in one place</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Notes from every lecture, organized by date</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Choose Brief, Standard, or Detailed notes</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Assignments and deadlines pulled out for you</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Share notes to your WhatsApp group</span>
              </li>
            </ul>
            <Link to="/signup" className="mt-8 block rounded-full border-2 border-[#1e1b4b] py-3 text-center font-semibold text-[#1e1b4b] hover:bg-[#1e1b4b] hover:text-white transition-colors">Sign up</Link>
          </div>

          {/* For Contributors */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-2 ring-[#f59e0b]">
            <h3 className="text-lg font-semibold text-[#1e1b4b]">For Contributors</h3>
            <p className="mt-3 text-4xl font-extrabold text-[#1e1b4b]">Free <span className="text-sm font-medium text-[#f59e0b]">· Approved after signup</span></p>
            <p className="mt-2 text-sm font-medium text-[#1e1b4b]/60">Everything in Listener, plus</p>
            <ul className="mt-3 flex flex-col gap-3 text-sm">
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Record lectures right in the app</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Review and edit notes before they're published</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>No extra writing, the notes are already drafted for you</span>
              </li>
              <li className="flex gap-3 text-[#1e1b4b]/80">
                <svg className="h-5 w-5 shrink-0 mt-0.5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                <span>Get notified the moment your notes are ready to review</span>
              </li>
            </ul>
            <Link to="/signup" className="mt-8 block rounded-full bg-[#f59e0b] py-3 text-center font-semibold text-[#1e1b4b] hover:bg-[#fbbf24] transition-colors">Sign up</Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl px-6 py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-md text-2xl font-extrabold tracking-tight text-[#1e1b4b] md:text-4xl">Ready to never miss a lecture again?</h2>
          <div className="mt-8"><Link to="/signup" className="inline-block rounded-full bg-[#f59e09] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1e1b4b]/20 hover:bg-[#fbbf24] transition-colors">Get Started. It's Free! </Link></div>
        </div>
      </section>

      <footer className="border-t border-[#1e1b4b]/10 px-3 py-3">
        <p className="text-center text-xs text-[#1e1b4b]/60">© 2026 {appName}</p>
      </footer>
    </div>
  )
}

export default Landing
