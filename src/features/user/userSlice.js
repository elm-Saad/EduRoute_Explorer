import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import customFetch,{checkForUnauthorizedResponse} from '../../utils/axios'
import { addToLocalStorage, getFromLocalStorage,removeFromLocalStorage } from '../../utils/localStorage'
import { clearAllCoursesStats } from '../allCourses/allCoursesSlice'
import { clearValues } from '../course/courseSlice'

/** */
// import { clearAllJobsState } from '../allJobs/allJobsSlice'
// import { clearValues } from '../job/jobSlice'

const initialState = {
  isLoading:false,
  isSidebarOpen:true,
  user:getFromLocalStorage()
}



export const RegisterUser = createAsyncThunk(
    'user_registerUser',
    //return a promise that well get handled in the extra reducer
    async(user,thunkAPI)=>{
        try {
            const res = await customFetch.post('auth/register',user)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const LoginUser = createAsyncThunk(
    'user_LoginUser',
    async(user,thunkAPI)=>{
        try {
            const res = await customFetch.post('auth/login',user)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)


export const UpdateUser = createAsyncThunk(
  'user_updateUser',
  async(user,thunkAPI)=>{
    try {
     
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers:{
          Authorization:`Bearer ${thunkAPI.getState().user.user.token}`,
        }

      })
      return resp.data
    } catch (error) {  
      return checkForUnauthorizedResponse(error, thunkAPI)
    }
  }
)

export const clearStore = createAsyncThunk(
  'user_clearStore',
  async (message, thunkAPI) => {
    try {
      // logout user
      thunkAPI.dispatch(logoutUser(message))
      // clear Course value
      thunkAPI.dispatch(clearAllCoursesStats())
      // clear Course input values
      thunkAPI.dispatch(clearValues())
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  }
)




const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      toggleSidebar : (state)=>{
        state.isSidebarOpen=!state.isSidebarOpen
      },
      logoutUser : (state,{payload})=>{
        state.user=null
        state.isSidebarOpen=false
        removeFromLocalStorage()

        //
        if(payload){
          toast.success(payload)
        }
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(RegisterUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(RegisterUser.fulfilled, (state, action) => {
            const { user } = action.payload 
            addToLocalStorage(user)
            state.isLoading = false
            state.user = user
            toast.success(`hello there ${user.name}`)
          })
          .addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
          .addCase(LoginUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(LoginUser.fulfilled, (state, action) => {
            const { user } = action.payload   
            addToLocalStorage(user)         
            state.isLoading = false
            state.user = user
            toast.success(`welcome back ${user.name}`)
          })
          .addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
          .addCase(clearStore.rejected, (state, action) => {
            toast.error('There was an Error...')
          })
          .addCase(UpdateUser.pending, (state) => {
            state.isLoading = true
          })
          .addCase(UpdateUser.fulfilled, (state, action) => {
            const { user } = action.payload   
            addToLocalStorage(user)         
            state.isLoading = false
            state.user = user
            toast.success(`User Updated`)
          })
          .addCase(UpdateUser.rejected, (state, action) => {
            state.isLoading = false
            toast.error(action.payload)
          })
          
    },
})


export const {logoutUser,toggleSidebar} = userSlice.actions

export default userSlice.reducer