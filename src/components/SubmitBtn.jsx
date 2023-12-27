


const SubmitBtn = ({isLoading})=>{
    return <>
    {
        isLoading?
        <button 
            className="btn"
            disabled={isLoading}
        >
            <span className="loading loading-spinner"></span>
            loading
        </button>
        :
        <button 
            type='submit'
            className='btn'
            disabled={isLoading}
        >
         Submit
        </button>
    }
        </>

}

export default SubmitBtn