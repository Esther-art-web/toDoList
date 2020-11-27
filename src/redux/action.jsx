import * as action from './actionTypes'

export const newTask= ( event )=>{
    return{
        type: action.NEW_TASK,
        payload:{
            event
        }
    }
}
export const addNote= () =>{
    return{
        type: action.ADD_NOTE,
        payload:{
           
        }
    }
}
