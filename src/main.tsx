import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './routes/root';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      
    </Route>
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />   
  </StrictMode>,
)
