// import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import JobInfo from './JobInfo'
// // import moment from 'moment'
// import { editJob, deleteJob } from '../features/job/jobSlice';

const Job = ({_id,position,company,jobLocation,jobType,createdAt,status,})=>{

    // const dispatch = useDispatch()

    // // const date = moment(createdAt).format('MMM Do, YYYY')
    // const date = 'MMM Do, YYYY'


    // const DeleteJob = ()=>{
    //   dispatch(deleteJob(_id))
    // }
    // const EditJob = ()=>{
    //   dispatch(editJob({editJobId:_id,position,company,jobLocation,jobType,status}))
    // }
    return (
        <>
          {/* <header>
            <div className='main-icon'>{company.charAt(0)}</div>
            <div className='info'>
              <h5>{position}</h5>
              <p>{company}</p>
            </div>
          </header>
          <div className='content'>
            <div className='content-center'>
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} />
              <div className={`status ${status}`}>{status}</div>
            </div>
            <footer>
              <div className='actions'>
                <Link
                  to='/add-job'
                  className='btn edit-btn'
                  onClick={EditJob}
                >
                  Edit
                </Link>
                <button
                  type='button'
                  className='btn delete-btn'
                  onClick={DeleteJob}
                >
                  Delete
                </button>
              </div>
            </footer>
          </div> */}
          job
        </>
    )
}

export default Job