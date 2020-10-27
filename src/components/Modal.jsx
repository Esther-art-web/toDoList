import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalBox extends Component {
    state = {  }
    closeModal=()=>{
        document.getElementsByClassName('modal-box')[0].style.display='none'
    }
    render() { 
        
        return ( 
            
                <div class="modal-box">
                    <div class="modal-content">
                        <span class="close" onClick={this.closeModal}>&times;</span>
                        <h2>Edit Task</h2>
                        <input type='text' className="form-control" style={this.inputStyle1} aria-label="..." placeholder='Enter new task here' onChange={(event)=>this.props.onTextChange(event)}  />
                        <Button className='btn btn-primary' id='edit' onClick={()=>this.props.onTextEdit()}> Edit</Button>
                    </div>

                </div>
               
                        
        
           
         );
    }
}
 
export default ModalBox;