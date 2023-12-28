import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../features/allCourses/allCoursesSlice'

const PageBtnContainer = ()=>{
    const {numOfPages,page} = useSelector((store)=>store.allCourses)
    const dispatch = useDispatch()

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
        <div className='join border-4'>
        <button className='bg-white join-item btn flex items-center justify-center' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
        </button>
        {pages.map((pageNumber) => {
            return (
            <button
                type='button'
                className={pageNumber === page ? 'join-item btn btn-primary ' : 'join-item btn bg-white'}
                key={pageNumber}
                onClick={()=> dispatch(changePage(pageNumber))}
            >
                {pageNumber}
            </button>
            )
        })}
         <button className='bg-white join-item btn flex items-center justify-center' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
        </button>
        </div>
       
        
  </>
}

export default PageBtnContainer