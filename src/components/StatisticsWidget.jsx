import { CiFolderOn } from "react-icons/ci"
import { MdOutlinePendingActions,MdOutlineFileDownloadDone } from "react-icons/md"
import { GrInProgress } from "react-icons/gr"
import { useSelector } from "react-redux"
import Loading from "./Loading"

const StatisticsWidget = () =>{
    
    const { stats ,isLoading} = useSelector((store) => store.allCourses)


    const Total = stats.declined + stats.pending + stats.interview


    if(isLoading){
        return <section className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
                <Loading />
            </section>
    }

    return <section className=" p-4 w-full bg-white rounded-md shadow-md min-h-80">
        <h2 className="mb-4 font-semibold text-xl">Courses Statistics</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border rounded-lg p-10 form-control gap-1 items-center">
                <CiFolderOn  
                    className="text-2xl text-blue-400 "
                 />
                <span className="text-xl font-semibold">{Total || 0}</span>
                <p className="text-gray-400">Total</p>
            </div>
            
            <div className="border rounded-lg p-10 form-control gap-1 items-center">
                <MdOutlinePendingActions  
                    className="text-2xl text-yellow-400 "
                />
                <span className="text-xl font-semibold">{ stats.declined || 0}</span>
                <p className="text-gray-400">Pending</p>
            </div>

            <div className="border rounded-lg p-10 form-control gap-1 items-center">
                <MdOutlineFileDownloadDone 
                    className="text-2xl text-green-400 "
                 />
                <span className="text-xl font-semibold">{stats.interview || 0}</span>
                <p className="text-gray-400">Finished</p>
            </div>

            <div className="border rounded-lg p-10 form-control gap-1 items-center">
                <GrInProgress  
                    className="text-2xl"
                />
                <span className="text-xl font-semibold ">{stats.pending || 0}</span>
                <p className="text-gray-400">in progress</p>
            </div>

        </div>
    </section>
}

export default StatisticsWidget