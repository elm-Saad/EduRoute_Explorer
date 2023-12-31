import { FormRow, FormRowSelect, SubmitBtn } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { handleChange,clearValues ,createCourse, editCourse} from '../../features/course/courseSlice'
import { useEffect } from 'react'
import { courseTypeOptionsMIM, statusOptionsMIM } from '../../utils/mimic'

const AddCourse  = () =>{
    const {
        isLoading,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        isEditing,
        editJobId,
    } = useSelector((store) => store.course)

   // mimic 
    const dispatch = useDispatch()

    // // set user job as default job for application location

    const {user}= useSelector((store)=> store.user)
    
    useEffect(()=>{
        // if the user edit a job 
        if(!isEditing)
        dispatch(handleChange({name:'jobLocation',value:user?.location || 'world'}))
    },[])

    const handleSubmit = (e)=>{
    e.preventDefault()
    if(!position||!company||!jobLocation){
        toast.error('please fill out all fields')
        return 
    }
    // Create job || // edit job
    if(isEditing){
        dispatch(editCourse({
            jobId:editJobId,
            job: {
                position,
                company,
                jobLocation,
                jobType,
                status,
            }
        }))
    }else{
        dispatch(createCourse({ position, company, jobLocation, jobType, status }))
    }
    }


    const handleCourseInputs = (e)=>{
        const name = e.target.name
        const value = e.target.value
        dispatch(handleChange({name,value}))
    }

    const clearCourses = ()=>{
        dispatch(clearValues())
    }

      
    return <>

        <form className='min-h-screen w-full flex items-start justify-center'>
           <div className='w-full h-full'>
                <h3 className='text-xl font-semibold text-center'>{isEditing ? 'Edit course' : 'Add course'}</h3>
                <div className='py-0 lg:px-28 form-control gap-4'>
                    {/* name */}
                    <FormRow
                        type='text'
                        labelText='name'
                        placeholder='course name'
                        name='position'
                        value={position}
                        handleChange={handleCourseInputs}
                    />
                    {/* instructor */}
                    <FormRow
                        type='text'
                        labelText='instructor'
                        placeholder='instructor'
                        name='company'
                        value={company}
                        handleChange={handleCourseInputs}
                    />
                    {/* Purpose */}
                    <FormRow
                        type='text'
                        labelText='Purpose of Course'
                        placeholder='learn React, Laravel, C++'
                        name='jobLocation'
                        value={jobLocation}
                        handleChange={handleCourseInputs}
                    />
                    {/* course status */}
                    <FormRowSelect
                        name='status'
                        value={status}
                        handleChange={handleCourseInputs}
                        list={statusOptions}
                        mimicList={statusOptionsMIM}
                    />
                    {/* course time */}
                    <FormRowSelect
                        name='jobType'
                        labelText='course duration'
                        value={jobType}
                        handleChange={handleCourseInputs}
                        list={jobTypeOptions}
                        mimicList={courseTypeOptionsMIM}
                    />
                    {/* btn container */}
                    
                    <div className='form-control gap-4'>
                        <button
                            type='button'
                            className='btn btn-block btn-neutral'
                            onClick={clearCourses}
                        >
                            clear
                        </button>
                        <button
                            type='submit'
                            className='btn btn-block btn-primary'
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            submit
                        </button>
                    </div>
                </div>
           </div>
        </form>
    </>
}
export default AddCourse 