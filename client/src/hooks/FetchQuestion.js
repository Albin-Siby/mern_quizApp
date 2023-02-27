import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getServerData } from "../helper/helper"
import * as Action from "../redux/question_reducer"

export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getdata, setGetData ] = useState({ isLoading : false, apiData : [], serverError : null})

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async() => {
            try{
                const [{ questions, answers }] = await getServerData("http://localhost:5000/api/questions", (data) => data)
                console.log({ questions, answers })

                if(questions.length > 0) {
                    setGetData(prev => ({...prev, isLoading : false}))
                    setGetData(prev => ({...prev, apiData : { questions, answers}}))

                    dispatch(Action.startExamAction({question : questions, answers}))
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

export const moveNextQuestion = () => async(dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}

export const movePrevQuestion = () => async(dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}