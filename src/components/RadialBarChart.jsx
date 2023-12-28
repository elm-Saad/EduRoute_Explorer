import {
    RadialBarChart,
    Bar,
    RadialBar,
    Legend,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts'
  
const RadialBarCharts = ({ data }) => {
    return <ResponsiveContainer width='100%' height={300}>
        <RadialBarChart data={data} margin={{ top: 50 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <RadialBar 
                minAngle={15} 
                label={{ fill: '#666', position: 'insideStart' }} 
                background 
                clockWise={true} 
                dataKey='uv'
            />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
  </ResponsiveContainer> 
  }
  
export default RadialBarCharts
/**
 * <RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
 */