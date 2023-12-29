import {ResponsiveContainer,AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip} from 'recharts'


const AreaCharts = ({data})=>{

  if(data.length === 0 ){
    return <section className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
        <h2 className='font-semibold text-2xl '>No stats...</h2>
    </section>
  }
  
    return <ResponsiveContainer width='100%' height={300}>
    <AreaChart data={data} margin={{ top: 50 }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='date' />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Area type='monotone' dataKey='count' stroke='#1e3a8a' fill='#3b82f6' />
    </AreaChart>
  </ResponsiveContainer>
}

export default AreaCharts