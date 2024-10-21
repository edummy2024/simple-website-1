import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav className="flex items-center justify-between h-16 mb-2">
        <Link to={'/'}>
          <img src="https://images.squarespace-cdn.com/content/v1/5d5e6a57e7a27b0001395f6e/1571229408517-A579ORG2WLX7B5W6UIL2/LARS_LOGO.png?format=1500w" alt="logo" width={170} />
        </Link>

        <ul className="flex gap-5 mx-6">
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
      </nav>
      <main>
          <Outlet />
      </main>
    </>
  )
}
