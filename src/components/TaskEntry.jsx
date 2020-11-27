import React, { useContext,useState,useEffect} from 'react';
import {FILTER_ALL, FILTER_DONE, FILTER_UNDONE} from '../redux/actionTypes';
import { TaskContext } from '../context/TaskContext';
import ModalBox from './Modal';
import Task from './Task';
import TaskList from './TaskList';
import TaskFilters from '../components/TaskFilters';

const TaskEntry = (props) => {
    const {task, dispatch} = useContext(TaskContext);
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCounter, setSelectedCounter] = useState(null);

    const filterAll=()=>{
        dispatch({type:FILTER_ALL})
    }
    const filterDone=()=>{
        dispatch({type:FILTER_DONE})
    }
    const filterUndone=()=>{
        dispatch({type:FILTER_UNDONE})
    }
    // useEffect(()=>console.log(task));
    return ( 
        <div className='main-content' >
            <div >
                <h1 className='title'> To Do List </h1>
                <Task task={props.task}  />
                <TaskFilters dispatch= {dispatch} filterAll={filterAll} filterDone={filterDone} filterUndone={filterUndone}/>
                {task.filterTask.map((count,index)=>{
                    return(
                        <React.Fragment>
                            <ModalBox index={index} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedCounter={selectedCounter}/>
                            <TaskList count={count} index={index} filterAll={filterAll} filterDone={filterDone} filterUndone={filterUndone} setModalOpen={setModalOpen} setSelectedCounter={setSelectedCounter}/>
                        </React.Fragment>
                        );
                    } 
                )}

            </div>
            
        </div>
     );
}
 
export default TaskEntry;
 
