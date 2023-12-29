import { getLatestCourses } from "../features/allCourses/allCoursesSlice"
import Loading from "./Loading"
import { useEffect } from "react"
import SingleCourseItem from "./SingleCourseItem"
import { useDispatch,useSelector } from "react-redux"

const LatestCourseWidget = () =>{
    const { isLoading,latest } = useSelector((store) => store.allCourses)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getLatestCourses())
    },[])
    
    if(latest.length === 0 ){
        return <main className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
                <h2 className='font-semibold text-2xl '>No courses...</h2>
            </main>
    }

    if(isLoading){
        return <main className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
                <Loading />
            </main>
    }

    const  getFirstFiveObjects = (latest)=> {
        if (latest.length > 5) {
          return latest.slice(0, 5)
        } else {
          return latest
        }
    }

    return <section className="p-4 w-full bg-white rounded-md shadow-md min-h-80">

            <h2 class="mb-2 font-semibold text-xl">Latest Courses</h2>
           
            <div className="form-control gap-2">
                {
                    getFirstFiveObjects(latest)?.map(item=>{
                        return <SingleCourseItem key={item._id} {...item} />
                    })
                }
                
            </div>
    </section>
}

export default LatestCourseWidget