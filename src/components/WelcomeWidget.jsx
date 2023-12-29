import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Loading from "./Loading"

const WelcomeWidget = () => {
    const {user,isLoading} = useSelector((store)=>store.user)

    if(isLoading){
        return <section className='w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
                <Loading />
        </section>
    }

    return <section className="w-full bg-white rounded-md shadow-md form-control gap-0 relative min-h-80">
        <div className="h-1/2 w-full p-4 pb-0 bg-custom">
            <h2 className="capitalize text-2xl font-semibold text-white">welcome</h2>
            <p className="text-gray-100 text-xl font-medium mt-1">{user?.name}</p>
        </div>

        <div className="w-full absolute top-1/3 left-2">
            <div className="avatar placeholder online">
                <div className="mask mask-hexagon bg-neutral text-neutral-content rounded-full w-20 md:w-24">
                    <span className="select-none text-2xl md:text-3xl uppercase">{(user?.name).slice(0, 2)}</span>
                </div>
            </div> 
        </div>
        
        <div className="h-1/2 w-full flex items-end p-4">
           <div className="w-full pt-6">
                <div className="w-full flex items-center justify-around">
                    <div className="text-lg text-gray-500">{user?.name}</div>
                    <div className="text-lg text-gray-500">
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">
                            Email
                        </a>
                    </div>
                    <div className="text-lg text-gray-500">{(user?.location).slice(0,10)}</div>
                </div>
                <div className="w-full flex items-end justify-end mt-4">
                    <Link 
                    to='/profile'
                    className="capitalize btn btn-neutral mr-4"
                    >
                        Profile
                    </Link>
                </div>
           </div>
        </div>
       
    </section>
}

export default WelcomeWidget