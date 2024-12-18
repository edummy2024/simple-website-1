import { useState } from "react";
import { Link, NavLink, Outlet, redirect, useNavigation } from "react-router-dom";
import { get } from "../utils/auth";


export async function loader() {
  const auth = get('auth');
  if (auth.length == 0 || !auth) {
    return redirect('/signin');
  }

  return null;
}

export default function Root() {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky z-30">
        <nav className="flex items-center justify-between h-16 mb-2">
          <Link to={'/'}>
            <img src="https://images.squarespace-cdn.com/content/v1/5d5e6a57e7a27b0001395f6e/1571229408517-A579ORG2WLX7B5W6UIL2/LARS_LOGO.png?format=1500w" alt="logo" width={170} />
          </Link>

          <ul className="hidden xl:flex gap-5 mx-6">
            <li>
              <NavLink to={'/'} className={({ isActive, isPending }) =>
                isPending ? 'opacity-5' : isActive ? "bg-yellow-200 p-3" : "p-3"
              }>Work</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className={({ isActive, isPending }) =>
                isPending ? 'opacity-5' : isActive ? "bg-yellow-200 p-3" : "p-3"
              }>About</NavLink>
            </li>
            <li>
              <Link to={'logout'}>Log out</Link>
            </li>
          </ul>

          <i className={`bx ${!isMenuOpen ? 'bx-menu' : 'bx-x'} xl:hidden block text-5xl cursor-pointer`} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

          <div className={`absolute xl:hidden top-16 left-0 w-full h-96 flex flex-col items-center justify-center bg-white shadow-lg font-semibold text-lg transform transition-transform ${isMenuOpen ? 'visible' : 'invisible'} text-center`}
            style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
            <NavLink to={'/'} className={({ isActive, isPending }) =>
              isPending ? 'opacity-5' : isActive ? "bg-yellow-200 p-3 w-full" : "p-3 w-full"
            }>Work</NavLink>

            <NavLink to={'about'} className={({ isActive, isPending }) =>
              isPending ? 'opacity-5' : isActive ? "bg-yellow-200 p-3 w-full" : "p-3 w-full"
            }>About</NavLink>

            <Link to={'logout'} className={"active:bg-yellow-200 p-3 w-full"
            }>logout</Link>

          </div>
        </nav>
      </header>
      <main className={
        navigation.state === 'loading' ? 'opacity-80' : ''
      }>
        <Outlet />
      </main>
    </>
  )
}
