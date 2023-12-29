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

    return <ResponsiveContainer width='100%' height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray='8 8' />
      <XAxis dataKey='date' />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Bar dataKey='count' fill='#731bd8' barSize={45} />
    </BarChart>
  </ResponsiveContainer> 
  }
  
export default BarChartComponent
