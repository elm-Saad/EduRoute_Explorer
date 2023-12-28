import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaCharts from './AreaCharts'
import { useSelector } from 'react-redux'



const ChartsContainer = ()=>{
    const { monthlyApplications: data } = useSelector((store) => store.allCourses)
    console.log(data)
    return <section className='text-center'>
      <h4>Monthly Courses</h4>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2'>
        <BarChart data={data} />
        <AreaCharts data={data} />
      </section>
    </section>
    
}

export default ChartsContainer