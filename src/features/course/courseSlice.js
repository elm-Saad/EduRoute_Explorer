import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch, {checkForUnauthorizedResponse} from '../../utils/axios'
import { getFromLocalStorage } from '../../utils/localStorage'
import { getAllCourses, hideLoading } from '../allCourses/allCoursesSlice'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}



export const createCourse = createAsyncThunk(
  'course_createCourse',
  async (course, thunkAPI ) =>{
    try {
      const resp = await customFetch.post('/jobs', course, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearValues())
      return resp.data
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)
export const deleteCourse = createAsyncThunk(
  'course_deleteCourse',
    async(id,thunkAPI)=>{
      try {
        //Delete a data
        const resp = await customFetch.delete(`/jobs/${id}`, {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        })
        //Refetch the all the data
        thunkAPI.dispatch(getAllCourses())
        return resp.data.msg
      } catch (error) {
        thunkAPI.dispatch(hideLoading())
        return checkForUnauthorizedResponse(error, thunkAPI)
      }
    }
)
export const editCourse = createAsyncThunk(
  'Courses_editCourse',
  async({jobId,job},thunkAPI)=>{
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      /** */
      thunkAPI.dispatch(clearValues())
      return resp.data
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)


const CourseSlice = createSlice({
    name:'course',
    initialState,
    reducers:{
      handleChange:(state,{payload:{name,value}})=>{
        state[name] = value
      },
      clearValues:()=>{
        return {
          ...initialState,
          // save the location from the profile
          jobLocation: getFromLocalStorage()?.location || '',
        }
      },
      setEditCourse: (state,{payload})=>{
        return {...state,isEditing: true,...payload}
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createCourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createCourse.fulfilled, (state) => {
          state.isLoading = false
          toast.success('course created')
        })
        .addCase(createCourse.rejected, (state, {payload}) => {
          state.isLoading = false
          toast.error(payload)
        })
        .addCase(editCourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editCourse.fulfilled, (state) => {
          state.isLoading = false
          toast.success('Course Updated')
        })
        .addCase(editCourse.rejected, (state, {payload}) => {
          state.isLoading = false
          toast.error(payload)
        })
        .addCase(deleteCourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteCourse.fulfilled, (state, {payload}) => {
          state.isLoading = false
          toast.success('Course Deleted')
        })
        .addCase(deleteCourse.rejected, (state, {payload}) => {
          state.isLoading = false
          toast.error(payload)
        })
        
  },
})


export const {handleChange,clearValues,setEditCourse} = CourseSlice.actions

export default CourseSlice.reducer