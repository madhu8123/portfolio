import {createSlice} from '@reduxjs/toolkit'
const initialState={
    eusers:[]
}
export const userSlice = createSlice({
    name:'mySlice',//uniquename
    initialState,
    reducers:{
        setUsers:(state,action)=>{//it contains 2 argu,first one action 2 nd payload
            state.eusers=[...state.eusers,action.payload]
        },
    }
})
export const {setUsers}=userSlice.actions
export default userSlice.reducer