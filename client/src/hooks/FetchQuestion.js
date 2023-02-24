import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Data from "../database/Data"
import * as Action from "../redux/question_reducer"

export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getdata, setGetData ] = useState({ isLoading : false, apiData : [], serverError : null})

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async() => {
            try{
                let question = await Data;

                if(question.length > 0) {
                    setGetData(prev => ({...prev, isLoading : false}))
                    setGetData(prev => ({...prev, apiData : question}))

                    dispatch(Action.startExamAction(question))
                } else {
                    throw new Error("No Question Available")
                }
            }catch(error) {
                setGetData(prev => ({...prev, isLoading : false}))
                setGetData(prev => ({...prev, serverError : error}))
            }
        })();
    }, [dispatch])

    return [getdata, setGetData ]

}