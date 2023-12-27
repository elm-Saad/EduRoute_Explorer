import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./features/user/userSlice"
import courseSlice from "./features/course/courseSlice"
import allCourseSlice from "./features/allCourses/allCoursesSlice"

export const store = configureStore({
    reducer: {
        user:userSlice,
        course:courseSlice,
        allJobs:allCourseSlice
    }
})