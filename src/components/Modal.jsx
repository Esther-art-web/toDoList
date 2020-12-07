import React, { useContext,useState } from 'react';
import { Button} from 'reactstrap';
import {TaskContext} from '../context/TaskContext';
import { EDIT_NOTE, FILTER_ALL } from '../redux/actionTypes';

const ModalBox = ({ modalOpen, setModalOpen, selectedCounter}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [editTask, setEditTask] = useState('');
    const { dispatch} = useContext(TaskContext);
    const closeModal=()=>{
        setModalOpen(false);
    }
    // useEffect(()=>{setEditTask(selectedCounter ? selectedCounter.value : null);},[])
    const onTextChange=(e)=>{
        if (e.target.value){
            setIsDisabled(false);
            setEditTask(e.target.value);
        } 
        else{
            setIsDisabled(true);
        }  
    }
    const onTextEdit =(id, value)=>{
        setModalOpen(false);
        dispatch({type: EDIT_NOTE, payload: {id, value}});
        dispatch({type: FILTER_ALL});
        
    }
    
    return ( selectedCounter && modalOpen? 
       (
        <div className="modal-box"  style={{display:'block'}}>
            <div className="modal-content" >
                <span className="close"  onClick={closeModal}>&times;</span>
                <h2>Edit Task</h2>
                <input type='text'  className="form-control" aria-label="..." placeholder='Enter new task here'  onChange={(e)=>onTextChange(e)} defaultValue={selectedCounter.value}  autoFocus />
                <Button className='btn btn-primary' id='edit' onClick={()=>onTextEdit(selectedCounter.id, editTask)} disabled={isDisabled}> Save</Button>
            </div>

        </div>) :
        null
     );
}
 
export default ModalBox;