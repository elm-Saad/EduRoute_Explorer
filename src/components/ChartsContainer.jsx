import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaCharts from './AreaCharts'
import { useSelector } from 'react-redux'



const ChartsContainer = ()=>{
    const [barChart,setBarChart] = useState(true)
    const { monthlyApplications: data } = useSelector((store) => store.allJobs)
    console.log(data)
    return <>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaCharts data={data} />}
    </>
    
}

export default ChartsContainer