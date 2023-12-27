import { useEffect } from 'react'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { getAllCourses } from '../features/allCourses/allCoursesSlice'
import PageBtnContainer from './PageBtnContainer'




const CoursesContainer = ()=>{
    const {jobs,isLoading,totalJobs, numOfPages,page,search,searchStatus,searchType,sort} = useSelector((store)=>store.allJobs)

    const dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(getAllCourses())
    },[page,search,searchType,searchStatus,sort])


    if(isLoading){
        return (
            <>
                <Loading center />
            </>
        )
    }
    if(jobs.length === 0 ){
        return (
            <>
                <h2>No jobs...</h2>
            </>
        )
    }


    

    return <>
        <h5>{totalJobs} course{jobs.length > 1 && 's'} found</h5>
        <div className='jobs'>
            {jobs.map((job) => {
                return <Job key={job._id} {...job} />;
            })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
    </>
}

export default CoursesContainer