import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({

    
    name: 'modal',
    initialState: {
        isOpen: false,
        title: '',
        subtitle: '',
        actions: null // не мій варіант
    },

    reducers: {
        openModal: state => {
            state.isOpen = true;
        },

        closeModal: state => {
            state.isOpen = false;
        },

        setModalText: (state, action) => {
            state.title = action.payload.title;
            state.subtitle = action.payload.subtitle;
        },

        setModalActions: (state, action) => { // не мій варіант
            state.actions = action.payload;
        }
    }
});

export const { openModal, closeModal, setModalText, setModalActions } = modalSlice.actions;

export default modalSlice.reducer;