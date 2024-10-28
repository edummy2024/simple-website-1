import { Form, Link, redirect, useActionData } from 'react-router-dom'
import { signUp } from '../utils/auth';

export async function action({ request }: any) {
    const formData = await request.formData();
    const paylaod = Object.fromEntries(formData);
    const user = await signUp({
      username: paylaod.username,
      password: paylaod.password,
    })

    if (user.status === 401) {
      return user;
    }
    return redirect('/signin')
}

export default function SignUp() {
  const actionData : any= useActionData();

  return (
    <article className='flex justify-center items-center h-screen'>
    <Form action='/signup' method='post' className='flex flex-col gap-3 p-3 border shadow-xl rounded-xl w-[500px] justify-center'>
      <section>
        <label htmlFor="username" className='block capitalize mb-2'>Username</label>
        <input type="text" name='username' id='username' required className='w-full  p-2 rounded-md border'/>
      </section>

      <section>
        <label htmlFor="password" className='block capitalize mb-2'>Password</label>
        <input type="text" id='password' name='password' required className='w-full  p-2 rounded-md border'/>
      </section>

      <button type='submit' className='w-full p-3 bg-blue-500 rounded-md text-white font-bold text-lg capitalize'>Sign Up</button>

      {
        actionData?.status === 401 &&
        <span className='text-red-300'>{actionData.statusText}</span>
      }
      <div>
        <Link to={'/signin'} children='Sign In' className='text-blue-400 text-lg capitalize inline-block float-end'/>
      </div>
    </Form>
    </article>
  )
}
