import axios from "axios";
import { AnyAction, Dispatch} from "redux";

import {API_KEY, API_URL, ModelOutput, OutputAction} from "../constant" 

const headers =  {
    "Accept" : "application/json"
}

export const getAllMostViewed = (period:any) =>{
    return async(dispatch:Dispatch<AnyAction| OutputAction>) => {
        try{
            const response = await axios.get<ModelOutput>(`${API_URL}viewed/${period}.json?api-key=${API_KEY}`,{headers})
            if(!response){
                dispatch({
                    type:'ON_ERROR',
                    payload:'Data Failed'
                })
            }else{
                dispatch({
                    type:'VIEWED',
                    payload:response.data.results
                })
            }
        }catch(error){
            return null
        }
    }
}

export const getAllMostShared = (period:any) =>{
    return async(dispatch:Dispatch<AnyAction| OutputAction>) => {
        try{
            const response = await axios.get<ModelOutput>(`${API_URL}shared/${period}.json?api-key=${API_KEY}`,{headers})
            if(!response){
                dispatch({
                    type:'ON_ERROR',
                    payload:'Data Failed'
                })
            }else{
                dispatch({
                    type:'SHARED',
                    payload:response.data.results
                })
            }
        }catch(error){
            return null
        }
    }
}

export const getAllMostEmailed = (period:any) =>{
    return async(dispatch:Dispatch<AnyAction| OutputAction>) => {
        try{
            const response = await axios.get<ModelOutput>(`${API_URL}emailed/${period}.json?api-key=${API_KEY}`,{headers})
            if(!response){
                dispatch({
                    type:'ON_ERROR',
                    payload:'Data Failed'
                })
            }else{
                dispatch({
                    type:'EMAIL',
                    payload:response.data.results
                })
            }
        }catch(error){
            return null
        }
    }
}