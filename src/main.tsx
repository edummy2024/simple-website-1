import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/root';
import About from './routes/about';
import Product, { loader as productLoader} from './routes/product';
import ErrorPage from './error-page';
import Signin, { action as signinAction } from './routes/signin';
import Signup, { action as signupAction } from './routes/signup';
import { loader as logoutLoader } from './routes/logout';
import PrivateRoute from './private-route';
import { Index, loader as indexLoader } from './routes';


const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Root />}  errorElement={<ErrorPage />} loader={rootLoader}>
        <Route index element={
          <PrivateRoute>
            <Index />
            </PrivateRoute>
            } loader={indexLoader} />
        <Route path=':id' element={
          <PrivateRoute>
              <Product />
          </PrivateRoute>
          } loader={productLoader} />
        <Route path='about' element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
          } />
        <Route path='logout' loader={logoutLoader} />
      </Route>
        <Route path='signin' element={<Signin />} action={signinAction} />
        <Route path='signup' element={<Signup />} action={signupAction} />
    </Route>
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />   
  </StrictMode>,
)
