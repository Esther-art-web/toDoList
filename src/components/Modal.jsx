import React, { useContext,useState, useEffect, useRef } from 'react';
import { Button} from 'reactstrap';
import {TaskContext} from '../context/TaskContext';
import { EDIT_NOTE, FILTER_ALL } from '../redux/actionTypes';

const ModalBox = ({index, modalOpen, setModalOpen, selectedCounter}) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const textInput = useRef(null);
    const closeBackDrop = useRef(null);
    const closePageModal = useRef(null);
    const [editTask, setEditTask] = useState('');
    const {task, dispatch} = useContext(TaskContext);
    const closeModal=()=>{
        setModalOpen(false);
    }
    useEffect(()=>{setEditTask(selectedCounter ? selectedCounter.value : null);},[])
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
        <div class="modal-box"  ref={closeBackDrop} style={{display:'block'}}>
            <div class="modal-content" ref={closePageModal}>
                <span class="close"  onClick={closeModal}>&times;</span>
                <h2>Edit Task</h2>
                <input type='text' ref={textInput} className="form-control" aria-label="..." placeholder='Enter new task here'  onChange={(e)=>onTextChange(e)} defaultValue={selectedCounter.value}  autoFocus />
                <Button className='btn btn-primary' id='edit' onClick={()=>onTextEdit(selectedCounter.id, editTask)} disabled={isDisabled}> Edit</Button>
            </div>

        </div>) :
        null
     );
}
 
export default ModalBox;