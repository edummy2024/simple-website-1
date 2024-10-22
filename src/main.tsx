import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './routes/root';
import About from './routes/about';
import Index, { loader } from './routes';
import Product, { loader as productLoader} from './routes/product';
import ErrorPage from './error-page';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Root />}  errorElement={<ErrorPage />} >
      <Route index element={<Index />}  loader={loader} />
      <Route path=':id' element={<Product />} loader={productLoader} />
      <Route path='about' element={<About />} />
    </Route>
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />   
  </StrictMode>,
)
