import { LatestCourseWidget, Loading, StatisticsWidget, StatsWidget, WelcomeWidget } from "../../components"
import { useSelector } from "react-redux"
const Dashboard = ()=>{
    const { monthlyApplications: data,isLoading } = useSelector((store) => store.allCourses)

    if(isLoading){
        return <main className='min-h-screen flex items-center justify-center'>
                <Loading />
            </main>
    }
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