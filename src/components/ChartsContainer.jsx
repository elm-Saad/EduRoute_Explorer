import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaCharts from './AreaCharts'
import { useSelector } from 'react-redux'
import LineCharts  from './LineCharts'



const ChartsContainer = ()=>{
    const { monthlyApplications: data } = useSelector((store) => store.allCourses)

    if(data.length === 0 ){
      return <section className='p-4 w-full min-h-96 flex items-center justify-center'>
          <h2 className='font-semibold text-2xl '>No stats...</h2>
      </section>
    }
    
    return <section className='my-10 text-center'>
      <h4 className='text-xl font-semibold'>Monthly Courses</h4>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          <BarChart data={data} />
          <LineCharts data={data}/>
          <AreaCharts data={data} />
      </section>
    </section>
    
}

export default ChartsContainer