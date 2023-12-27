// import { FormRow, FormRowSelect } from '../../components'
// import { useSelector, useDispatch } from 'react-redux'
// import { toast } from 'react-toastify'
// import { handleChange,clearValues ,createJob,editJobu} from '../../features/job/jobSlice'
// import { useEffect } from 'react'

const AddCourse  = () =>{
    // const {
    //     isLoading,
    //     position,
    //     company,
    //     jobLocation,
    //     jobType,
    //     jobTypeOptions,
    //     status,
    //     statusOptions,
    //     isEditing,
    //     editJobId,
    // } = useSelector((store) => store.job)

    // const dispatch = useDispatch()

    // // set user job as default job for application location

    // const {user}= useSelector((store)=> store.user)
    
    // useEffect(()=>{
    //     // if the user edit a job 
    //     if(!isEditing)
    //     dispatch(handleChange({name:'jobLocation',value:user?.location || 'world'}))
    // },[])

    // const handleSubmit = (e)=>{
    // e.preventDefault()
    // if(!position||!company||!jobLocation){
    //     toast.error('please fill out all fields')
    //     return 
    // }
    // // Create job || // edit job
    // if(isEditing){
    //     dispatch(editJobu({
    //         jobId:editJobId,
    //         job: {
    //             position,
    //             company,
    //             jobLocation,
    //             jobType,
    //             status,
    //         }
    //     }))
    // }else{
    //     dispatch(createJob({ position, company, jobLocation, jobType, status }))
    // }
    // }


    // const handleJobInputs = (e)=>{
    // const name = e.target.name
    // const value = e.target.value
    // // handle change from the jobSlice (other option)
    // dispatch(handleChange({name,value}))
    // }

    // const clearJobs = ()=>{
    //     dispatch(clearValues())
    // }

      
    return <>

        <form className='form'>
            {/* <h3>{isEditing ? 'edit job' : 'add job'}</h3> */}
            Hi Form Add courses
            <div className='form-center'>
                {/* position */}
                {/* <FormRow
                    type='text'
                    name='position'
                    value={position}
                    handleChange={handleJobInputs}
                /> */}
                {/* company */}
                {/* <FormRow
                    type='text'
                    name='company'
                    value={company}
                    handleChange={handleJobInputs}
                /> */}
                {/* location */}
                {/* <FormRow
                    type='text'
                    labelText='job location'
                    name='jobLocation'
                    value={jobLocation}
                    handleChange={handleJobInputs}
                /> */}
                {/* job status */}
                {/* <FormRowSelect
                    name='status'
                    value={status}
                    handleChange={handleJobInputs}
                    list={statusOptions}
                /> */}
                {/* job type */}
                {/* <FormRowSelect
                    name='jobType'
                    labelText='job type'
                    value={jobType}
                    handleChange={handleJobInputs}
                    list={jobTypeOptions}
                /> */}
                {/* btn container */}
                <div className='btn-container'>
                    {/* <button
                        type='button'
                        className='btn btn-block clear-btn'
                        onClick={clearJobs}
                    >
                        clear
                    </button>
                    <button
                        type='submit'
                        className='btn btn-block submit-btn'
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        submit
                    </button> */}
                </div>
            </div>
        </form>
    </>
}
export default AddCourse 