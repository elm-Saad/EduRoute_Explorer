import NavLinks from './NavLinks'
import Logo from './Logo'



const LgSidebar = ()=>{

    return  <div class="bg-white  min-h-screen w-full py-5 px-2 md:px-2">
        <header className='text-center mb-5'>
          <Logo />
        </header>
       <NavLinks />
    </div>
}

export default LgSidebar