import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import JobInfo from './JobInfo'
import moment from 'moment'
// import { editJob, deleteJob } from '../features/job/jobSlice';

const SingleCourse = ({_id,position,company,jobLocation,jobType,createdAt,status,})=>{

    const dispatch = useDispatch()

    const date = moment(createdAt).format('MMM Do, YYYY')


    // const DeleteJob = ()=>{
    //   dispatch(deleteJob(_id))
    // }
    // const EditJob = ()=>{
    //   dispatch(editJob({editJobId:_id,position,company,jobLocation,jobType,status}))
    // }
    return (
        <section className='bg-white rounded-md p-5 form-control gap-2 my-2'>
          <div className='flex items-start justify-between mb-2'>
            <div className='w-2/3'>
              <h4 className="">Astro dashboard</h4>
              <p className="">Astro dashboard projects design and Programming and hosting </p>
            </div>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
    
          <div class="team">
              team member
          </div>

          <div class="work d-flex">
              <span class="fs-13 rad-6 bg-eee">programming</span>
              <span class="fs-13 rad-6 bg-eee">design</span>
              <span class="fs-13 rad-6 bg-eee"> hosting</span>
              <span class="fs-13 rad-6 bg-eee">marketing</span>
          </div>
          <div class="info flex-manipulation ">
              <div class="prog bg-eee">
                  {/* <span style="width:50%"></span> */}
              </div>
              <div class="clr-gray fs-14">
                  {/* <i class="fa-solid fa-dollar-sign"></i> */}
                  2500
              </div>

          </div>
        </section>
    )
}

export default SingleCourse
/**
 *  <header>
            <div className='main-icon'>{company.charAt(0)}</div>
            <div className='info'>
              <h5>{position}</h5>
              <p>{company}</p>
            </div>
          </header>
          <div className='content'>
            <div className='content-center'>
            {/* <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} /> ///////
            job info
            <div className={`status ${status}`}>{status}</div>
          </div>
          <footer>
            <div className='actions'>
              <Link
                to='/add'
                className='btn edit-btn'
                // onClick={EditJob}
              >
                Edit
              </Link>
              <button
                type='button'
                className='btn delete-btn'
                // onClick={DeleteJob}
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
 */