


const SubmitBtn = ({isLoading,text='Submit'})=>{
    return <>
    {
        isLoading?
        <button 
            className="btn btn-neutral"
            disabled={isLoading}
        >
            <span className="loading loading-spinner"></span>
            loading
        </button>
        :
        <button 
            type='submit'
            className='btn btn-primary'
            disabled={isLoading}
        >
         {text}
        </button>
    }
        </>

}

export default SubmitBtn