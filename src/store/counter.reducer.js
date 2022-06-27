import { COUNTER_DECRE, COUNTER_INCRE } from "./action.type";


export const counterreducer = (state={ count:0 }, {type,payload})=>{
    switch(type){
        case COUNTER_INCRE:{
            state.count++
            return {...state}
        }
        case COUNTER_DECRE:{
            state.count--
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}