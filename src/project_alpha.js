import { configureStore, ReducerType } from '@reduxjs/toolkit';
import counterReducer from './redux/counterSlice';
import modalReducer from './redux/modalSlice';
import toDoReducer from './redux/toDoSlice';

const project = configureStore({

    reducer: {

        counter: counterReducer,

        modal: modalReducer,

        todo: toDoReducer,

    },

});

export default project;