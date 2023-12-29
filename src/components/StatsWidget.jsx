import { LineChart, CartesianGrid, XAxis,YAxis,Line,Tooltip,ResponsiveContainer } from 'recharts'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../features/allCourses/allCoursesSlice'
import { useEffect } from 'react'


const StatsWidget = () => {
  
  const { monthlyApplications: data ,isLoading } = useSelector((store) => store.allCourses)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(showStats())
  },[])


  if(isLoading){
    return <section className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
        <Loading />
      </section>
    }

    
    if(data.length === 0 ){
      return <section className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
          <h2 className='font-semibold text-2xl '>No stats...</h2>
      </section>
    }
      

    return <ResponsiveContainer
        className='bg-white rounded-md shadow-md'
        width='100%'
        height={320}
    >
      <LineChart data={data}  >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
  </ResponsiveContainer>
  }
  
export default StatsWidget