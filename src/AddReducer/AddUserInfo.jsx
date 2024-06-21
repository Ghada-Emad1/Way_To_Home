import {createSlice} from '@reduxjs/toolkit'
//import { userInfo } from '../data/UserInfo';
const AddUser=createSlice({
    name:'AddUser',
    initialState:{
        userInfo:[]
    },
    reducers:{
        addUserInfo:(state,action)=>{
        const { id, phone, gender } = action.payload;
        const userIndex = state.userInfo.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            // Update existing user info
            state.userInfo[userIndex] = {
            ...state.userInfo[userIndex],
            phone,
            gender
            };
        }else {
            state.userInfo.push(action.payload)
        }
        },
        deleteuser :( state ,action)=>{
           state.userInfo = state.userInfo.filter(item => item.id != action.payload)
        },

    }

})
export const{addUserInfo ,deleteuser}=AddUser.actions
export default AddUser.reducer