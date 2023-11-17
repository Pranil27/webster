import { createSlice } from "@reduxjs/toolkit";

export const questionsReducer = createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answer:[],
        trace:0
    },
    reducers : {
        startExamAction :(state,action) => {
            let {questions , answer} = action.payload;
            return {
                ...state,
                queue: questions,
                answer:answer
            }

        },
        moveNextAction: (state) => {
            return {
                ...state,
                trace:state.trace+1
            }
        },
        movePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace-1
            }
        },
        resetAllAction: () => {
            return {
                queue:[],
                answer:[],
                trace:0
            }
        }
    }
})


export const {startExamAction,moveNextAction,movePrevAction,resetAllAction} =questionsReducer.actions

export default questionsReducer.reducer;