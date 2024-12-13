import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleUser, UsersState } from "../interface/apiDataTypes";

const initialState: UsersState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
  loggedInUser : null
};


// Reducers Logic ->
const handleStartLoading = (state:UsersState)=>{
    state.loading = true
    state.error = null
}

const handleFetchUsers = (state:UsersState,action: PayloadAction<SingleUser[]>)=>{

    state.users = action.payload
    state.loading = false
}

const handleLoggedInUser =(state:UsersState,action:PayloadAction<SingleUser[]>)=>{
    state.loggedInUser = action.payload[0]
    state.loading = false
}

const handleUserDetails = (state:UsersState,action:PayloadAction<SingleUser>)=>{
    state.currentUser = action.payload
    state.loading = false
}

const handleError = (state:UsersState,action:PayloadAction<string>)=>{
    state.error = action.payload
    state.loading = false
}

const handleRemoveUser = (state:UsersState,action:PayloadAction<string>)=>{
    state.users = state.users.filter(user => user.id !== action.payload)
    state.loading = false

}

export const usersSlice = createSlice({
    initialState,
    name: 'users',
    reducers:{

        startLoading: handleStartLoading,
        fetchUsers: handleFetchUsers,
        setLoggedIn: handleLoggedInUser,
        userDetails: handleUserDetails,
        setError: handleError,
        deleteUser: handleRemoveUser
    }
})

export const {startLoading,fetchUsers,setLoggedIn,userDetails,setError,deleteUser} = usersSlice.actions
export default usersSlice.reducer