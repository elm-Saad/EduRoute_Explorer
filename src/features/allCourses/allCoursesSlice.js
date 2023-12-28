import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch ,  { checkForUnauthorizedResponse } from '../../utils/axios'


// filter feature
const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
}




export const getAllCourses = createAsyncThunk(
  'allCourses_getCourses',
  async(_,thunkAPI)=>{
    const {page, search, searchStatus, searchType, sort } = thunkAPI.getState().allCourses

    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`

    if(search){
      url +=`&search=${search}`
    }

    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return resp.data 
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)

export const showStats = createAsyncThunk(
  'allCourses_showStats',
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get('/jobs/stats',{
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })

      return res.data
    } catch (error) {
      
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)


   


const allCoursesSlice = createSlice({
  name:'allCourses',
  initialState,
  reducers:{
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange:(state,{payload:{name,value}})=>{
      //rewin the page to 1 for every change in the filter (just because)
      state.page= 1
      state[name] = value
    },
    clearFilters:(state)=>{
      return  {...state,...initialFiltersState}

    },
    changePage:(state,{payload})=>{
      state.page = payload
      
    },
    clearAllCoursesStats: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCourses.fulfilled, (state,{payload}) => {
        state.isLoading = false
        state.jobs = payload.jobs
        // pagination
        state.numOfPages = payload.numOfPages
        state.totalJobs = payload.totalJobs
        
      })
      .addCase(getAllCourses.rejected, (state, {payload}) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true
      })
      .addCase(showStats.fulfilled, (state,{payload}) => {
        state.isLoading = false
        state.stats = payload.defaultStats
        state.monthlyApplications = payload.monthlyApplications
      })
      .addCase(showStats.rejected, (state, {payload}) => {
        state.isLoading = false
        toast.error(payload)
      })
},
})

export const {showLoading,hideLoading,handleChange,clearFilters,changePage,clearAllCoursesStats} = allCoursesSlice.actions

export default allCoursesSlice.reducer
