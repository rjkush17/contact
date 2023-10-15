import { createSlice, nanoid } from "@reduxjs/toolkit";
import { list } from "postcss";

const initialState = {
    list : [{
        id:1,
        name: "Rishabh Kushwah",
        label: "Frined",
        phone : 1235684785,
        email: "rishabhkushwah@gmail.com"
    }]
}

export const listSlice = createSlice({
    name : "list",
    initialState,
    reducers : {
        addContact : (state, action) =>{
        const newContact = {
            id : nanoid(),
            ...action.payload
        }
        state.list.push(newContact)
        },
        deleteContact : (state, action) => {
            state.list = state.list.filter((list)=>list.id !== action.payload)
        }
    }
})

export const {addContact, deleteContact} = listSlice.actions

export default listSlice.reducer