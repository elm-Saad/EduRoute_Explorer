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
                <div>
                    <div className="avatar placeholder">
                        <div className="mask mask-hexagon bg-neutral text-neutral-content rounded-full w-20">
                            <span className="select-none text-3xl uppercase">{(company).slice(0, 2)}</span>
                        </div>
                    </div> 
                </div>
              <h4 className="">{position}</h4>
            </div>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
    
          <div class="border-t-2 border-b-2 border-indigo-500 p-4">
             {jobLocation}
          </div>

          <div class="flex items-center justify-between ">
              <div class="prog bg-eee">
                <kbd className="kbd kbd-md select-none">{status}</kbd>
              </div>
              <div class="clr-gray fs-14">
                  {jobType}
              </div>

          </div>
          <div className='flex justify-between mt-4'>
              <Link
                to='/add'
                className='btn btn-success'
                // onClick={EditJob}
              >
                Edit
              </Link>
              <button
                type='button'
                className='btn btn-error'
                // onClick={DeleteJob}
              >
                Delete
              </button>
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