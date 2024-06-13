import {createSlice} from '@reduxjs/toolkit'
import { userInfo } from '../data/UserInfo';
const AddUser=createSlice({
    name:'AddUser',
    initialState:userInfo,
    reducers:{
        addUserInfo:(state,action)=>{
            state.push(action.payload)
        },
        deleteuser :( state ,action)=>{
             return state.filter(item => item.id != action.payload)
        },

    }

})
export const{addUserInfo ,deleteuser}=AddUser.actions
export default AddUser.reducer