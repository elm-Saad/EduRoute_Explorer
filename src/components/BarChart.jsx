import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts'
  
const BarChartComponent = ({ data }) => {

  if(data.length === 0 ){
    return <section className=' p-4 w-full bg-white rounded-md shadow-md min-h-80 flex items-center justify-center'>
        <h2 className='font-semibold text-2xl '>No stats...</h2>
    </section>
  }
  
    return <ResponsiveContainer width='100%' height={300}>
    <BarChart data={data} margin={{ top: 50 }}>
      <CartesianGrid strokeDasharray='8 8' />
      <XAxis dataKey='date' />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Bar dataKey='count' fill='#3b82f6' barSize={75} />
    </BarChart>
  </ResponsiveContainer> 
  }
  
export default BarChartComponent
