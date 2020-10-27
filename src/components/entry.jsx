import React, { useState, Component } from 'react';
import '../App.css';
import { ButtonToolbar,ButtonGroup, Button } from 'react-bootstrap'
import ModalBox from './Modal'
import Task from './Task';
class Entry extends Component {
    state={
        selectedCounter: true
    }
    styles1={
        width: '100%',
        height:'100%',
        position: 'relative',
        paddingTop: 100,
        paddingLeft: 30,
        paddingRight: 30,
    }
    styles2={
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 25,
        position: 'fixed',
        borderRadius:10 ,
        top: 240,
        right: 150,
        backgroundColor: '#5f8f8f'
    }
    checkBoxStyle={
        width: 40,
        height: 20,
        marginRight: 20,
        marginTop: 30,
    
    }
    titleStyle={
        borderTop: 20,
        marginTop: 30,
        fontSize: 25,
        fontWeight:' bold',
       textAlign: 'center'
        
    }
    bottomStyle={
        position: 'fixed',
        bottom: 20,
        right: '30%',
        // margin: '200px',
        fontWeight:'bold',
        fontFamily: 'Roboto',
        zIndex:-2
    }
    deletestyle={
        borderwidth: 1 ,
        borderStyle:'solid ',
        borderColor: 'white',
        boxSizing: 'border-box',
        paddingRight: 10,
        width: 35,
        height:30,
        textAlign: 'center',
        fontSize: 15,
        backgroundColor:'#5f8f8f',
        position:'absolute',
        right: 0,
        top: 30
    }
    editstyle={
        borderwidth: 1 ,
        borderStyle:'solid ',
        borderColor: 'white',
        boxSizing: 'border-box',
        paddingRight: 10,
        width: 35,
        height:30,
        textAlign: 'center',
        fontSize: 15,
        backgroundColor:'#5f8f8f',
        position:'absolute',
        right: 40,
        top: 30
    }
    textStyle={
        position: 'absolute',
        right: 20,
        fontFamily: 'Roboto'
        
    }
    taskStyle={
        display: 'inline',
        // marginTop: 30, 
        width: '60%'

    }
    entryStyle={
        position: 'relative',
        width: '60%',
        marginLeft: '20%',
        marginBottom: 10
    }


    
    render() { 
        
        return ( 

            <div className='main-content'  style={this.styles1}>
                <div >
        
                    {/* <input type="date" id='date' width='10px' className="form-control" aria-label="..."/>  */}
                    <h1  style={this.titleStyle} className='title'> My To do List</h1>
                    <Task onTextChange={this.props.onTextChange} onTextEdit={this.props.onTextEdit} onAdd= {this.props.onAdd} task={this.props.task} />
                    {this.props.counter.map((count,index)=>{
                        return(
                        <div style={this.entryStyle} >
                            <div className="col-lg-12">
                                <div >
                                    <span>
                                        <input type="checkbox"  key={index} id={index} style={this.checkBoxStyle} onClick={(event)=>this.props.onCheckBoxClick(event,index)} aria-label="..."/>
                                    </span>
                                    <div  key={index} id={index}  style={this.taskStyle} className="" aria-label="...">{count.value}</div>
                                    <span style={this.textStyle} >
                                        {this.props.mssg(index)}
                                    </span>
                                    <Button  style={this.editstyle} onClick={(event)=>this.props.onEdit(event,index)} id={count.id}>
                                        <i className= 'fa fa-pencil' ></i>
                                    </Button>
                                    <Button  style={this.deletestyle} onClick={()=> this.props.onDelete(count.id)}>
                                        <i className= 'fa fa-trash' ></i>
                                    </Button>
                                </div>
                            </div>
                            <ModalBox index={index} onTextEditChange={this.props.textEditChange}  onTextChange={this.props.onTextChange} onTextEdit={this.props.onTextEdit} onAdd= {this.props.onAdd} task={this.props.task}/>
                    </div>);}
                    )}
                </div>
                
                {/* <span style={this.bottomStyle}><i>Everything that is worth doing, is worth doing well</i></span> */}
            </div>
         );
    }
}
 
export default Entry;