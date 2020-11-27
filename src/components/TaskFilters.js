import React, {useContext,useRef, useEffect} from 'react';
import {FILTER_ALL, FILTER_DONE, FILTER_UNDONE} from '../redux/actionTypes';
import {TaskContext} from '../context/TaskContext'

const TaskFilters = () => {
    const All= useRef(null);
    const {task, dispatch} = useContext(TaskContext);
    const filterAll=()=>{
        dispatch({type:FILTER_ALL})
    }
    const filterDone=()=>{
        dispatch({type:FILTER_DONE})
    }
    const filterUndone=()=>{
        dispatch({type:FILTER_UNDONE})
    }
    // useEffect(()=> filterAll())
    return ( 
        <div className='filters'>
            <span onClick={filterAll} ref={All} >All</span>
            <span onClick={filterDone}>Done</span>
            <span onClick={filterUndone}>Undone</span>
        </div>
     );
}
 
export default TaskFilters;