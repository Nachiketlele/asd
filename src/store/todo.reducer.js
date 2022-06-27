import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, COMPLETE_TODO, DELETE_TODO, GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./action.type";





let initial = {
    gettodo:{
        loading:false,
        error:false,

    },
    addtodo:{
        loading:false,
        error:false,
        
    },
    data:[],
}


export const todoreducer = (state=initial,{type,payload})=>{
    switch(type){
        
        case GET_TODO_LOADING:{
            return {...state, gettodo:{
                  loading:true,
                  error:false,
            }, 
        }
        }
        case GET_TODO_SUCCESS:{
            return {...state, gettodo:{
                  loading:false,
                  error:false,
            }, 
            data: payload
        }
        }
        case GET_TODO_ERROR:{
            return {...state, gettodo:{
                  loading:false,
                  error:true,
            }, 
        }
        }





        case ADD_TODO_LOADING:{
            return {...state, addtodo:{
                  loading:true,
                  error:false,
            }, 
        }
        }
        case ADD_TODO_SUCCESS:{
            return {...state, addtodo:{
                  loading:false,
                  error:false,
            }, 
            data:[...state.data,payload]
        }
        }
        case ADD_TODO_ERROR:{
            return {...state, addtodo:{
                  loading:false,
                  error:true,
            }, 
        }
        }


        case COMPLETE_TODO:{
            let newTodo = state.data.map((el)=>{
                if(el.id===payload){
                     if(el.isCompleted===false){
                          el.isCompleted = true
                          return el
                     }else{
                         el.isCompleted = false
                     }
                }
                return el
            })
            return {...state, data: newTodo}
        }
        case DELETE_TODO:{
             let todoss = state.data.filter((el)=>
             {if(el.id!==payload){
                return el
             }})
             return {...state,data:todoss}
        }
        default:{
            return state
        }
    }
}