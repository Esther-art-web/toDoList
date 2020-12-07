import React, { useContext,useState,useEffect} from 'react';
import {FILTER_ALL, FILTER_DONE, FILTER_UNDONE} from '../redux/actionTypes';
import { TaskContext } from '../context/TaskContext';
import { Button } from 'reactstrap';
import ModalBox from './Modal';
import Task from './Task';
import TaskList from './TaskList';
import TaskFilters from '../components/TaskFilters';
import DatePicker from "react-datepicker";

const TaskEntry = () => {
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
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <Button className="example-custom-input" onClick={onClick}>
        <i className= "fa fa-calender">&#xf073;</i>
        </Button>);
    return ( 
        <div className='main-content' >
            <div style={{marginTop: '5%'}} >
                {/* <DatePicker
                selected={startDate}
                  onChange={date => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                   />  */}
                <Task task={task} startDate={startDate}  />
                <ModalBox modalOpen={modalOpen} setModalOpen={setModalOpen} selectedCounter={selectedCounter}/>
                {task.filterTask.length?
                <TaskFilters dispatch= {dispatch} filterAll={filterAll} filterDone={filterDone} filterUndone={filterUndone}/>
                :
                null}
                {task.filterTask.length ?
                task.filterTask.map((count,index)=>{
                    return( 
                            <TaskList key={count.id} count={count} index={index} filterAll={filterAll} filterDone={filterDone} filterUndone={filterUndone} setModalOpen={setModalOpen} setSelectedCounter={setSelectedCounter}/>
                        );
                        
                    }
                ): <span className="no-entry">You have no task yet, free time:)</span>}

            </div>
            
        </div>
     );
}
 
export default TaskEntry;
 
