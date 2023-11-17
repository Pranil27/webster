import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import data , {answers} from '../database/data';

import * as Action from '../redux/questions_reducer';
import axios from 'axios';

/** fetching questions from database */

export const useFetchQuestions = (data) => {

    const dispatch = useDispatch();

    const [getData,setGetData] = useState({isLoading:false, apiData:[],serverError:null});

    useEffect(()=>{
        setGetData(prev => ({...prev,isLoading:true}));

        (async () => {
            try {
                const {questions,answer} = data; //await axios.get(`http://localhost:8000/quiz/quiz0?title=${title}&category=${category}`);

                if(questions.length>0){
                    setGetData(prev => ({...prev,isLoading:true}));
                    setGetData(prev => ({...prev,apiData:{questions,answer}}));

                    dispatch(Action.startExamAction({questions,answer}));
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({...prev,isLoading:true}));
                setGetData(prev => ({...prev,serverError:error}));
            }
        })();
    },[dispatch]);


  return [getData,setGetData];
}

export const MoveNextQuestion = () => async (dispatch) => {

    try {
        dispatch(Action.moveNextAction());
    } catch (error){
        console.log(error);
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error);
    }

}


