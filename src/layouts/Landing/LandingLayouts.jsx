import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'

const LandingLayouts = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        <Outlet /> 
      </main>
    </>
  )
}

export default LandingLayouts