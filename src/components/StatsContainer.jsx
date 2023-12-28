import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import { useSelector } from 'react-redux'



const StatsContainer = ()=>{

    const { stats } = useSelector((store) => store.allCourses)
    const { user } = useSelector((store)=> store.user)
    
    return <section className='flex items-center justify-center'>
        <div className="stats shadow">

          <div className="stat">
            <div className="stat-figure text-primary">
              <FaSuitcaseRolling className="inline-block w-8 h-8 stroke-current"/>
            </div>
            <div className="stat-title">pending</div>
            <div className="stat-value text-primary">{ stats.declined || 0}</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">in progress</div>
            <div className="stat-value text-secondary">{stats.pending || 0}</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar placeholder online">
                <div className="mask mask-hexagon bg-neutral text-neutral-content rounded-full w-16">
                    <span className="select-none text-xl uppercase">{(user?.name).slice(0, 2)}</span>
                </div>
              </div> 
            </div>
            <div className="stat-value">{stats.interview || 0}</div>
            <div className="stat-title">Finished</div>
          </div>

        </div>
    </section>
}

export default StatsContainer