import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import moment from 'moment'
import { statusOptionsMIM, courseTypeOptionsMIM } from '../utils/mimic'
import { deleteCourse, setEditCourse } from '../features/course/courseSlice'

const SingleCourse = ({_id,position,company,jobLocation,jobType,createdAt,status,})=>{

    const { jobTypeOptions, statusOptions,isLoading } = useSelector((store) => store.course)

    const dispatch = useDispatch()

    const date = moment(createdAt).format('MMM Do, YYYY')


    const DeleteCourse = ()=>{
      dispatch(deleteCourse(_id))
    }

    const EditCourse = ()=>{
      dispatch(setEditCourse({editJobId:_id,position,company,jobLocation,jobType,status}))
    }


    const mimicFn = (uniqItem) => {
      // Combine the arrays original
      const originalArray = statusOptions.concat(jobTypeOptions)
  
      // Combine the arrays mimicked
      const mimickedArray = statusOptionsMIM.concat(courseTypeOptionsMIM)
  
  
      const indexInOriginalArray = originalArray.indexOf(uniqItem)
  
      const newUniqItem = mimickedArray[indexInOriginalArray]

      return newUniqItem
    }

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
              <h4 className="text-xl ml-2">{position}</h4>
            </div>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
    
          <div class="border-t-2 border-b-2 p-4 my-2 capitalize">
            become a {jobLocation}
          </div>

          <div class="flex items-center justify-between ">
              <div class="prog bg-eee">
                <kbd className="kbd kbd-md select-none">{mimicFn(status)}</kbd>
              </div>
              <div class="clr-gray fs-14">
                  {mimicFn(jobType)}
              </div>

          </div>
          <div className='flex justify-between mt-4'>
              <Link
                to='/add'
                className='btn btn-primary'
                onClick={EditCourse}
              >
                Edit
              </Link>
              <button
                type='button'
                className='btn btn-neutral'
                onClick={DeleteCourse}
                disabled={isLoading}
              >
                Delete
              </button>
            </div>
        </section>
    )
}

export default SingleCourse