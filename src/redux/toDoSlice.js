import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAllToDo = createAsyncThunk( //функція яка приймає два аргумента

    'todo/fetchAllToDo',
    async () => {
        const { data } = await axios.get('http://localhost:3000/todos');
        return data;
    }
)


const initialState = {
    data: [],
    isLoading: false,
    isError: false       
};

const toDoSlice = createSlice({

    name: 'todo',
    initialState,

    reducers: {

        addNotes: (state, action) => {
            state.data.push({
                
                    id: state.data.length,
                    text: action.payload
                
            })
        },

        removeNotes: (state, action) => {
            const index = state.data.findIndex(todo => todo.id === action.payload)
            if (index !== -1) state.data.splice(index, 1)
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllToDo.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchAllToDo.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllToDo.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
});

export const { addNotes, removeNotes } = toDoSlice.actions;
export default toDoSlice.reducer;