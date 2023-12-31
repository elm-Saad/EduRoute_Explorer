import { Outlet } from "react-router-dom"
import { LgSidebar,Navbar } from "../../components"
import { useSelector } from 'react-redux'

const SharedLayout  = () =>{

    const {isSidebarOpen} = useSelector((store)=>store.user)

    
    return <main className='w-full min-h-screen flex justify-center'>
        <article className="max-w-[1400px] w-full flex">
          
          <section className={`${isSidebarOpen?'w-[380px]':'w-[64px]'} max-w-[64px] md:max-w-[380px]`}>
            <LgSidebar />
          </section>
          <section className="w-full bg-white">
            <Navbar />
            <article className='p-4 md:p-10 bg-[#f1f5f9]'>
              <Outlet />
            </article>
          </section>
        </article>
      </main>
}
export default SharedLayout 