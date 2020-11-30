import * as actions from './actionTypes';

var nextNum;
const nextId=()=> {
    nextNum = nextNum || 0
    return nextNum++;
};
export const taskReducer=(state, action)=>{
    switch(action.type){
        case(actions.NEW_TASK):
           
            // console.log(event.target.value)
            return {
                ...state,
                value: action.value,
                task: action.value
            }

        
        case(actions.ADD_NOTE):{
            const counters= [
                ...state.counters,
                {
                id: nextId(),
                value: action.payload.value,
                date: action.payload.date,
                checked: false
                }
            ]
            return {...state,task:'', counters}
        }    
        case(actions.EDIT_NOTE):{
            const counters= state.counters.map(c=>
                 c.id === action.payload.id ? 
                 {...c, value: action.payload.value}:
                 {...c}
                 )
            return { ...state, counters, value: action.payload.value }
        }
        case(actions.DELETE_NOTE):{
            const counters= state.counters.filter(c=>
                c.id !== action.index)
            return {...state, counters}    
        }
        case(actions.CHECK_BOX_CLICK):{
            const counters= state.counters.map(c=>
                c.id === action.id ? 
                {...c, checked:!c.checked}:
                {...c}
                )

            console.log(counters);    
           return { ...state, counters }
        }
        case(actions.FILTER_ALL):{
            const filterTask= [...state.counters];
            return {...state, filterTask};
        }
        case(actions.FILTER_DONE):{
            const filterTask= state.counters.filter(c=>c.checked === true)
            return {...state, filterTask};
        }
        case(actions.FILTER_UNDONE):{
            const filterTask= state.counters.filter(c=>c.checked === false)
            return {...state, filterTask};
        }
       default:
            return {...state};

        
        
            
    }
}