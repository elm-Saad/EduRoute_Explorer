import { LineChart, CartesianGrid, XAxis,YAxis,Line,Tooltip,ResponsiveContainer } from 'recharts'

const StatsWidget = ({ data }) => {
  console.log(data)
    return <ResponsiveContainer  width='100%' height={320}>
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