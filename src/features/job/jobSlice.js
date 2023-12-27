import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch, {checkForUnauthorizedResponse} from '../../utils/axios'
import { getFromLocalStorage } from '../../utils/localStorage'
import { logoutUser } from '../user/userSlice'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  // ex
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  // default value
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}


/**
 * Save The Auth Header
 * in a  utils/authHeader.js 
 * || or use Axios Interceptors Approach
 */
const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  }
}
/**
 * import authHeader from '../../utils/authHeader'

 * const resp = await customFetch.post('/____', ___, authHeader(thunkAPI))
 */

export const createJob = createAsyncThunk(
  'job_createJob',
  async (job, thunkAPI ) =>{
    try {
      const resp = await customFetch.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearValues())
      return resp.data
    } catch (error) {
      // if(error.response.status = 401){
      //   /** */
      //   if (error.response.status === 401) {
      //     thunkAPI.dispatch(logoutUser());
      //     return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
      //   }
      //   return thunkAPI.rejectWithValue(error.response.data.msg);
      // }

      //base error
      // return thunkAPI.rejectWithValue(error.response.data.msg)
      //for 401 and base error
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)
export const deleteJob = createAsyncThunk(
  'job_deleteJob',
    async(id,thunkAPI)=>{
      try {
        //Delete a data
        const resp = await customFetch.delete(`/jobs/${id}`, {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        })
        //Refetch the all the data
        thunkAPI.dispatch(getAllJobs())
        return resp.data.msg
      } catch (error) {
        thunkAPI.dispatch(hideLoading())
         //base error
        // return thunkAPI.rejectWithValue(error.response.data.msg)
        //for 401 and base error
        return checkForUnauthorizedResponse(error, thunkAPI)
      }
    }
)
export const editJobu = createAsyncThunk(
  'job_editJob',
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
      //base error
      // return thunkAPI.rejectWithValue(error.response.data.msg)
      //for 401 and base error
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)


const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
      handleChange:(state,{payload:{name,value}})=>{
        state[name] = value
      },
      clearValues:()=>{
        // what ever is returned from the reducer is the new state as a hole
        return {
          ...initialState,
          // save the location from the profile
          jobLocation: getFromLocalStorage()?.location || '',
        }
      },
      editJob: (state,{payload})=>{
        return {...state,isEditing: true,...payload}
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createJob.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createJob.fulfilled, (state) => {
          state.isLoading = false
          toast.success('job created')
        })
        .addCase(createJob.rejected, (state, {payload}) => {
          state.isLoading = false
          // error from 
          /**
           *return thunkAPI.rejectWithValue(error.response.data.msg);
          */
          toast.error(payload)
        })
        .addCase(deleteJob.fulfilled, (state, {payload}) => {
          state.isLoading = false
          toast.success(payload)
        })
        .addCase(deleteJob.rejected, (state, {payload}) => {
          state.isLoading = false
          toast.error(payload)
        })
        .addCase(editJobu.pending, (state) => {
          state.isLoading = true
        })
        .addCase(editJobu.fulfilled, (state) => {
          state.isLoading = false
          toast.success('job updated')
        })
        .addCase(editJobu.rejected, (state, {payload}) => {
          state.isLoading = false
          toast.error(payload)
        })
  },
})


export const {handleChange,clearValues,editJob} = jobSlice.actions

export default jobSlice.reducer