import { FormRow, FormRowSelect, SubmitBtn } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { handleChange,clearValues ,createJob,setEditJob} from '../../features/course/courseSlice'
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
    
    // useEffect(()=>{
    //     // if the user edit a job 
        // if(!isEditing)
    //     dispatch(handleChange({name:'jobLocation',value:user?.location || 'world'}))
    // },[])

    const handleSubmit = (e)=>{
    e.preventDefault()
    if(!position||!company||!jobLocation){
        toast.error('please fill out all fields')
        return 
    }
    // Create job || // edit job
    if(isEditing){
        // dispatch(setEditJob({
        //     jobId:editJobId,
        //     job: {
        //         position,
        //         company,
        //         jobLocation,
        //         jobType,
        //         status,
        //     }
        // }))
    }else{
        dispatch(createJob({ position, company, jobLocation, jobType, status }))
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

        <form className='form'>
            <h3 className='text-xl font-semibold '>{isEditing ? 'Edit course' : 'Add course'}</h3>
            <div className='py-10 px-10 md:px-28 form-control gap-4'>
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
                {/* Gol */}
                <FormRow
                    type='text'
                    labelText='course gol'
                    placeholder='React, Javascript, Laravel, C++'
                    name='jobLocation'
                    value={jobLocation}
                    handleChange={handleCourseInputs}
                />
                {/* course status */}
                <FormRowSelect
                    name='status'
                    value={status}
                    handleChange={handleCourseInputs}
                    list={statusOptionsMIM}
                />
                {/* course time */}
                <FormRowSelect
                    name='jobType'
                    labelText='course time'
                    value={jobType}
                    handleChange={handleCourseInputs}
                    list={courseTypeOptionsMIM}
                />
                {/* btn container */}
                
                <div className='form-control gap-4'>
                    <button
                        type='button'
                        className='btn btn-block'
                        onClick={clearCourses}
                    >
                        clear
                    </button>
                    <button
                        type='submit'
                        className='btn btn-block'
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        submit
                    </button>
                </div>
            </div>
        </form>
    </>
}
export default AddCourse 