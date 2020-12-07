import React, {useContext} from 'react';
import {FILTER_ALL, FILTER_DONE, FILTER_UNDONE} from '../redux/actionTypes';
import {TaskContext} from '../context/TaskContext'

const TaskFilters = () => {
    
    const { dispatch} = useContext(TaskContext);
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
            <a href="#all"><span onClick={filterAll} >All</span></a>
            <a href="#done"><span onClick={filterDone}>Done</span></a>
            <a href="#undone"><span onClick={filterUndone}>Undone</span></a>
        </div>
     );
}
 
export default TaskFilters;