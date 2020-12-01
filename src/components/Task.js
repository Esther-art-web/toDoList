import React,{ useContext, useState, useEffect} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';
import { TaskContext } from '../context/TaskContext';
import { ADD_NOTE, NEW_TASK , FILTER_ALL} from '../redux/actionTypes';



const Task =({startDate})=>{
  const [disable, setDisable] = useState(true);
  const {task, dispatch} = useContext(TaskContext);
  const handleTextChange=(e)=>{
    dispatch({type: NEW_TASK, value: e.target.value })
  }
  const handleAddTask=()=>{
   var date= startDate.toUTCString();
    dispatch({type: ADD_NOTE, payload:{date, value: task.value}});
    dispatch({type:FILTER_ALL});
  }
  
   useEffect(()=> task.task? setDisable(false): setDisable(true))
    return(
    <div className='taskDiv '>
        <form onSubmit={handleAddTask}>
            <input type='text' className='form-control task-entry' id='taskEntry' autoFocus  aria-label="..." placeholder='Enter a task here' onChange={(e)=>handleTextChange(e)} value={task.task} />
        </form>
        <div className='input-group-append'>
          <Button onClick={handleAddTask}  id='addTask' disabled={disable}>
              <i className= 'fa fa-plus'></i>
          </Button>
        </div>


    </div>  
    );
}

export default Task;