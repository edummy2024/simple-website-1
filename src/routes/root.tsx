import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky">
        <nav className="flex items-center justify-between h-16 mb-2">
          <Link to={'/'}>
            <img src="https://images.squarespace-cdn.com/content/v1/5d5e6a57e7a27b0001395f6e/1571229408517-A579ORG2WLX7B5W6UIL2/LARS_LOGO.png?format=1500w" alt="logo" width={170} />
          </Link>

          <ul className="hidden xl:flex gap-5 mx-6">
            <li>
              <NavLink to={'/'} className={({ isActive, isPending }) =>
                isPending ? 'opacity-5' : isActive ? "bg-yellow-400 p-3" : "p-3"
              }>Work</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className={({ isActive, isPending }) =>
                isPending ? 'opacity-5' : isActive ? "bg-yellow-400 p-3" : "p-3"
              }>About</NavLink>
            </li>
          </ul>

          <i className={`bx ${!isMenuOpen ? 'bx-menu' : 'bx-x'} xl:hidden block text-5xl cursor-pointer`} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

          <div className={`absolute xl:hidden top-16 left-0 w-full h-96 flex flex-col items-center justify-center bg-white font-semibold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'} text-center`}
            style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
            <NavLink to={'/'} className={({ isActive, isPending }) =>
              isPending ? 'opacity-5' : isActive ? "bg-yellow-400 p-3 w-full" : "p-3 w-full"
            }>Work</NavLink>

            <NavLink to={'about'} className={({ isActive, isPending }) =>
              isPending ? 'opacity-5' : isActive ? "bg-yellow-400 p-3 w-full" : "p-3 w-full"
            }>About</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
