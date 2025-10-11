import { GithubIcon } from "lucide-react"

export default function Navbar() {
  return (
    <div className="navbar z-20 bg-base-200/70 backdrop-blur-xl fixed shadow-sm">
      <div className="navbar-start">
        <a className="flex items-center gap-2 group" href="/">
          <div className="w-8 h-8 text-primary-content bg-primary flex rounded-md items-center justify-center">IA</div>
          <span>Irvan Ahmad P.</span>
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <Menu />
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown">
          <button tabIndex={0} role="button" aria-label="Navigation menu" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </button>
          <div className="relative">
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-200/85 !fixed inset-x-0 rounded-box w-full z-1 mt-3 p-2 shadow"
            >
              <Menu />
            </ul>
          </div>
        </div>

        <a href="https://github.com/irvanahmadp/" target="_blank" className="btn btn-outline hidden border-slate-500 md:inline-flex"><GithubIcon className="size-4"/> Github</a>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <>
      <li>
        <a href="#projects">Projects</a>
      <li>
        <a href="#articles">Articles</a></li>
      </li>
      <li>
        <a href="#about">About</a>
      </li>

      <li className="mt-2 md:hidden">
        <a href="https://github.com/irvanahmadp/" target="_blank" className="btn btn-outline">
          Github
        </a>
      </li>
    </>
  )
}