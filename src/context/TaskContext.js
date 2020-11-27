import React, {createContext, useEffect, useReducer} from 'react';
import {taskReducer} from '../redux/reducer'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [task, dispatch] = useReducer(taskReducer, { }, ()=>{
        const localData = localStorage.getItem('tasks');
        return localData? JSON.parse(localData): 
        {
            counters: [ ],
            // selectedCounter:null,
            value:'',
            task: '',
            filterTask: []
        }
        
    }
    )
    useEffect(()=> localStorage.setItem('tasks', JSON.stringify(task)))
    return ( 
        <TaskContext.Provider value={{task, dispatch}}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskContextProvider;