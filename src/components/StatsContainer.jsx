import { useSelector } from 'react-redux'
import { MdPendingActions } from "react-icons/md"
import { GrInProgress } from "react-icons/gr"

const StatsContainer = ()=>{

    const { stats } = useSelector((store) => store.allCourses)
    const { user } = useSelector((store)=> store.user)
    
    return <section className='flex items-center justify-center'>
        <div className="stats shadow">

          <div className="stat">
            <div className="stat-figure text-primary">
              <MdPendingActions className="inline-block w-8 h-8 stroke-current"/>
            </div>
            <div className="stat-title">pending</div>
            <div className="stat-value text-primary">{ stats.declined || 0}</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <GrInProgress className="inline-block w-8 h-8 stroke-current" />
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