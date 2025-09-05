import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"


function MainLayout() {
  return (
    <div className="flex flex-col">
        <Header />
        <main className="flex justify-center items-center flex-col min-h-[100vh] m-4">
            <Outlet />
        </main>
        <Footer  />
    </div>
  )
}

export default MainLayout
