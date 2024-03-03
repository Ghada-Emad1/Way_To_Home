import {createSlice} from '@reduxjs/toolkit'
import { userInfo } from '../data/UserInfo';
const AddUser=createSlice({
    name:'AddUser',
    initialState:userInfo,
    reducers:{
        addUserInfo:(state,action)=>{
            state.push(action.payload)
        }
    }

})
export const{addUserInfo}=AddUser.actions
export default AddUser.reducer