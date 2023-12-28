import { useEffect } from 'react'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allCourses/allCoursesSlice'


const Stats  = () =>{

    const {isLoading} = useSelector((store)=>store.allCourses)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(showStats())
    },[])


    if(isLoading){
        return <Loading center />
    }

    return <section className='min-h-screen'>
        <StatsContainer />
        <ChartsContainer />
    </section>
}
export default Stats