import { LatestCourseWidget, StatisticsWidget, StatsWidget, WelcomeWidget } from "../../components"

const Dashboard = ()=>{
    
    return <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <WelcomeWidget />
            <StatsWidget />
            <StatisticsWidget />
            <LatestCourseWidget />
        </div>
    </section>
}

export default Dashboard