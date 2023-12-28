import { useEffect } from 'react'
import SingleCourse from './SingleCourse'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { getAllCourses } from '../features/allCourses/allCoursesSlice'
import PageBtnContainer from './PageBtnContainer'




const CoursesContainer = ()=>{
    const {jobs,isLoading,totalJobs, numOfPages,page,search,searchStatus,searchType,sort} = useSelector((store)=>store.allCourses)

    const dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(getAllCourses())
    },[page,search,searchType,searchStatus,sort])


    if(isLoading){
        return <>
                <Loading center />
            </>
        
    }
    if(jobs.length === 0 ){
        return  <main className='min-h-screen flex items-center justify-center'>
                <h2 className='font-semibold text-2xl '>No courses...</h2>
            </main>
    }


    

    return <>
        <h5>{totalJobs} course{jobs.length > 1 && 's'} found</h5>
        <section 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
        >
            {jobs.map((job) => {
                return <SingleCourse key={job._id} {...job} />
            })}
        </section>
        {numOfPages > 1 && <PageBtnContainer />}
    </>
}

export default CoursesContainer