import { redirect } from "react-router-dom";

export async function loader() {
  localStorage.removeItem('auth');
  return redirect('/signin');
}