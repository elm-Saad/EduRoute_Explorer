import { FormRow, FormRowSelect } from '.'
import { useSelector, useDispatch } from 'react-redux'
import { clearFilters,handleChange } from '../features/allCourses/allCoursesSlice'
import {useState, useMemo} from 'react'



const SearchContainer = ()=>{



    const [LocalSearch,setLocalSearch] = useState('')

    const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allCourses)
    const { jobTypeOptions, statusOptions } = useSelector((store) => store.course)

    const dispatch = useDispatch()
    const handleSearch = (e) => {  
      dispatch(handleChange({name: e.target.name, value:e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLocalSearch('')
        dispatch(clearFilters())
    }

    const debounce = ()=>{
      let timeoutId
      return (e)=>{
        setLocalSearch(e.target.value)
        clearTimeout(timeoutId)
        timeoutId= setTimeout(()=>{
          dispatch(handleChange({name: e.target.name, value: e.target.value}))
        },500)
      }
    }


    const optimizedDebounce = useMemo(()=>debounce(),[])

    return <>
        <form className='form-control items-center bg-white p-10 rounded-lg shadow-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full h-full lg:p-5'>
          {/* search position */}
          <FormRow
            type='text'
            name='search'
            value={LocalSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
        </div>
        <button
            className='btn btn-block btn-error mt-4'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
        </button>
      </form>
    </>

}

export default SearchContainer