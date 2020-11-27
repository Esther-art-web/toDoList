import React, { useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import { Button } from 'react-bootstrap'
import { DELETE_NOTE ,CHECK_BOX_CLICK, FILTER_ALL} from '../redux/actionTypes';


const TaskList = ({count, index, setModalOpen,filterDone, filterUndone, setSelectedCounter}) => {
    const { dispatch } = useContext(TaskContext);

    const handleTextEdit=(e, index)=>{
        if (parseInt(e.currentTarget.id)===index){
            setSelectedCounter(count);     
        }
        setModalOpen(true);
    }
    const handleCheckBoxClick=()=>{
        console.log(count);
        dispatch({type: CHECK_BOX_CLICK, id: count.id});
        dispatch({type:FILTER_ALL})

    }
    return ( 
        <div key={count.id} id={index} >
            <div className="col-lg-10 col-md-8 mr-5 task">
                <Button  onClick={handleCheckBoxClick} ><i className='fa fa-check'></i></Button>
                <span id={index}  className="task-value"  style={{textDecoration: count.checked? 'line-through': 'none', color: count.checked? 'rgba(0,0,0,0.)': 'black'}}>{count.value} </span>

                    <span className='checked' >{count.checked? 'Done' : 'Undone'}</span>
                    <Button className='edit' id={count.id} onClick={(e)=>handleTextEdit(e, count.id)}>
                        <i className= 'fa fa-pencil' ></i>
                    </Button>
                    <Button  className='delete' onClick={()=>{ dispatch({type: DELETE_NOTE, index: count.id}); dispatch({type:FILTER_ALL })}}>
                        <i className= 'fa fa-trash' ></i>
                    </Button> 
            </div>
        </div>
     );
}
 
export default TaskList;