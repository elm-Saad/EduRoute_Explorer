


const SubmitBtn = ({isLoading,text='Submit'})=>{
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
         {text}
        </button>
    }
        </>

}

export default SubmitBtn