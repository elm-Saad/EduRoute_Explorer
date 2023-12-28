import { LatestCourseWidget, StatisticsWidget, StatsWidget, WelcomeWidget } from "../../components"
import { useSelector } from "react-redux"
const Dashboard = ()=>{
    const { monthlyApplications: data } = useSelector((store) => store.allCourses)

    return <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <WelcomeWidget />
            <StatsWidget data={data} />
            <StatisticsWidget />
            <LatestCourseWidget />
        </div>
    </section>
}

export default Dashboard