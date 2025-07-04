import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Footer from './components/layouts/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import './index.css'
import allRoutes from './routes/Index';

const router = createBrowserRouter(allRoutes);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
