import { Outlet } from "react-router-dom"
import { LgSidebar,Navbar } from "../../components"//LeftSidebar

const SharedLayout  = () =>{
    return <main className='w-full min-h-screen flex justify-center'>
        <article className="max-w-[1400px] w-full flex">
          {/**controle the width of the side bare using isSidebar open from store */}
          <section className="max-w-[64px] md:max-w-[380px] w-80 ">
            <LgSidebar />
          </section>
          <section className="w-full bg-white">
            <Navbar />
            <article className='p-10'>
              <Outlet />
            </article>
          </section>
        </article>
      </main>
}
export default SharedLayout 