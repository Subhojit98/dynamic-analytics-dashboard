import {AppThunk} from '../store/DataStore'

import {fetchUsers,startLoading,setLoggedIn,userDetails, setError,deleteUser} from "../features/usersSlice"
import {analyticLoading,analyticError,fetchAnalytics, fetchDeletedUsers} from '../features/analyticsSlice'

const authenticateUser = (email:string, password:string):AppThunk=> async(dispatch)=>{
    dispatch(startLoading())
    try{
        const response = await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users/2`)
        const data = await response.json()

        if(data.email !== email.trim() || data.password !== password.trim()){
            throw new Error("User not found or invalid credentials")
        }
       else{
        dispatch(setLoggedIn([data]))
       }

    }catch(error){
        dispatch(setError((error as Error).toString()))
    }
}

const fetchAllUsers = (page:number):AppThunk=> async(dispatch)=>{
    dispatch(startLoading())
    try{
        const response = await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users?page=${page}&limit=5`)
        const data = await response.json()
        dispatch(fetchUsers(data))

    }catch(error){
        dispatch(setError((error as Error).toString()))
    }
}

const fetchUserDetails = (id:string):AppThunk=> async(dispatch)=>{
    dispatch(startLoading())
    try{
        const response = await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users/${id}`)
        const data = await response.json()
        dispatch(userDetails(data))

    }catch(error){
        dispatch(setError((error as Error).toString()))
    }
}
    
const deleteUserById = (id:string):AppThunk=> async(dispatch)=>{
    const count = 1
    dispatch(startLoading())
    try{
        await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users/${id}`)
        dispatch(deleteUser(id))
        dispatch(fetchDeletedUsers(count))

    }catch(error){
        dispatch(setError((error as Error).toString()))
    }
}

const searchUserQuery = (query:string):AppThunk=> async(dispatch)=>{
    dispatch(startLoading())
    try{
        const response = await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users?search=${query}`)
        const data = await response.json()
        // throwing coustom error if no user found
        if(data.length > 5 || data === "Not found"){
            dispatch(fetchAllUsers(1))
            dispatch(setError("No user found"))
        }
        else dispatch(fetchUsers(data))
    }catch(error){
        dispatch(setError((error as Error).toString()))
    }
}

const setCurrentuser = (id:string):AppThunk=> async(dispatch)=>{
    dispatch(startLoading())
    try{
        const response = await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users/${id}`)
        const data = await response.json()
        dispatch(userDetails(data))

    }catch(error){
        dispatch(setError((error as Error).toString()))
    }
}

const fetAllUserData = ():AppThunk=> async(dispatch)=>{
   
    dispatch(analyticLoading())
    try{
        const response = await fetch(`https://6757edd3c0a427baf94e7f70.mockapi.io/api/v1/users`)
        const data = await response.json()
        dispatch(fetchAnalytics(data))

    }catch(error){
        dispatch(analyticError((error as Error).toString()))
    }
}
export {authenticateUser,fetchAllUsers,fetchUserDetails,deleteUserById,searchUserQuery,setCurrentuser,fetAllUserData}