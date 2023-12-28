import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaCharts from './AreaCharts'
import { useSelector } from 'react-redux'
import RadialBarCharts  from './RadialBarChart'



const ChartsContainer = ()=>{
    const { monthlyApplications: data } = useSelector((store) => store.allCourses)
    console.log(data)
    return <section className='my-10 text-center'>
      <h4 className='text-xl font-semibold'>Monthly Courses</h4>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2 md:gap-4'>
        <BarChart data={data} />
        <AreaCharts data={data} />
        <RadialBarCharts data={data}/>
      </section>
    </section>
    
}

export default ChartsContainer