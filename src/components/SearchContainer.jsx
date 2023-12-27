import { FormRow, FormRowSelect } from '.'
import { useSelector, useDispatch } from 'react-redux'
import { clearFilters,handleChange } from '../features/allJobs/allJobsSlice'
import {useState, useMemo} from 'react'



const SearchContainer = ()=>{



    const [LocalSearch,setLocalSearch] = useState('')

    const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs)
    const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

    const dispatch = useDispatch()
    const handleSearch = (e) => {

      /**
       * when using the search filter (search typing) its go to
       * fetch every time u type which cause a dozen of fetches 
       * simple solution is return when ever is steel loading then fetch when its done 
       * but it steel have a UI problem  could be fixed with debounce method
       */
      /**V js
       * //btn that u can click what ever time and just after 
       * //that last click with 2s delay u console.log('btn click with a debounce')
       * const btn ....
       * const debounce = ()=>{
       *  let TimeoutId // first time it mount 
       *  return ()=>{
       *    clearTimeout(timeoutId)// clear the before setTimeout
       *    timeoutId = setTimeout(()=>{// use A new setTimeout
       *      console.log('btn click with a debounce')
       *    },2000)  
       *  }
       * }
       * btn.addEventListener('click',debounce())
       * 
       * //=> setTimeout return an id which pass into clearTimeout to clear the set
       */
      
      dispatch(handleChange({name: e.target.name, value:e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLocalSearch('')
        dispatch(clearFilters())
    }

    // not working in react only in v js => solution is useMemo
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
        <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
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
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </>

}

export default SearchContainer