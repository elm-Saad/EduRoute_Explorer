import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../features/allJobs/allJobsSlice'

const PageBtnContainer = ()=>{
    const {numOfPages,page} = useSelector((store)=>store.allJobs)
    const dispatch = useDispatch()

    /**
     * https://www.google.com/search?q=erator+(range)&sourceid=chrome&ie=UTF-8
     * 
     * return a range 
     */
    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1
      })

    const nextPage = () => {
        let newPage = page + 1
        if(newPage > numOfPages){
            newPage = 1
        }
        dispatch(changePage(newPage))
    };
    const prevPage = () => {
        let newPage = page - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage))
    }

    return <>
        <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
        </button>
        <div className='btn-container'>
        {pages.map((pageNumber) => {
            return (
            <button
                type='button'
                className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                key={pageNumber}
                onClick={()=> dispatch(changePage(pageNumber))}
            >
                {pageNumber}
            </button>
            )
        })}
        </div>
        <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
        </button>
  </>
}

export default PageBtnContainer