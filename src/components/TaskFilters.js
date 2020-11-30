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
            <a href="#"><span onClick={filterAll} ref={All} >All</span></a>
            <a href="#"><span onClick={filterDone}>Done</span></a>
            <a href="#"><span onClick={filterUndone}>Undone</span></a>
        </div>
     );
}
 
export default TaskFilters;