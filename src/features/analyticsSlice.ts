import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { SingleUser } from "../interface/apiDataTypes";

export type UsersState ={
    usersData: SingleUser[];
    activeUsers: SingleUser[]
    loading: boolean;
    error: string | null
    deletedUsersCount : number
}

const initialState:UsersState = {
    usersData:[],
    activeUsers:[],
    deletedUsersCount: 0,
    loading: false,
    error: null,
}

const handleStartLoading = (state:UsersState)=>{
    state.loading = true
    state.error = null
}

const handleError = (state:UsersState,action:PayloadAction<string>)=>{
    state.error = action.payload
    state.loading = false
}

const handelFetchUsers = (state: UsersState, action: PayloadAction<SingleUser[]>) => {
    
    state.usersData = action.payload;
    state.activeUsers = action.payload.filter(user => user.status)
    state.loading = false;
    state.error = null;
}

const handeldeletedUserCount = (state: UsersState, action: PayloadAction<number>)=>{
      state.deletedUsersCount += action.payload;
    state.loading = false    
}

const analyticDataSlice = createSlice({
    name: "analytics",
    initialState,
    reducers: {
        analyticLoading: handleStartLoading,
        analyticError: handleError,
        fetchAnalytics: handelFetchUsers,
        fetchDeletedUsers: handeldeletedUserCount

    }
})

export const {analyticLoading,fetchAnalytics,analyticError,fetchDeletedUsers} = analyticDataSlice.actions;
export default analyticDataSlice.reducer;

