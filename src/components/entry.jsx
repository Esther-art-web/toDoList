import React, { Component } from 'react';
import '../App.css';
import { ButtonToolbar,ButtonGroup, Button } from 'react-bootstrap'
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
class Entry extends Component {
    state={
        selectedCounter: true
    }
    styles1={
        position: 'relative',
        paddingTop: 100,
        paddingLeft: 30,
        paddingRight: 30,
    }
    styles2={
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 40,
        position: 'fixed',
        borderRadius:'50%' ,
        bottom: 20,
        right: 0,
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
        borderLeft: 'none',
        borderRight: 'none',
        marginTop: 30,
        fontSize: 25,
        fontWeight:' bold',
        display: 'block',
        
    }
    inputStyle1={
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        marginTop: 20,
        fontSize: 15,
        padding: 'none',
        display: 'block',
        // control: (base, state) => ({
        //     ...base,
        //     border: '1px solid black',
        //     boxShadow: 'none',
        //     '&:hover': {
        //         border: '1px solid black',
        //     }
        // })
        
    }
    bottomStyle={
        position: 'fixed',
        bottom: 20,
        right: '30%',
        // margin: '200px',
        fontWeight:'bold',
        fontFamily: 'Roboto'
    }
    deletestyle={
        marginTop: 20,
        width: 40,
        height:30,
        textAlign: 'center',
        padding: 'none',
        fontSize: 20,
        backgroundColor:'#5f8f8f'
    }
    textStyle={
        position: 'absolute',
        right:0,
        fontFamily: 'Roboto'
        
    }

    
    render() { 
        
        return ( 

            <div className='main-content' style={this.styles1}>
                <div>
                    <label htmlFor="date">Select a date:</label>
        
                    <input type="date" id='date' className="form-control" aria-label="..."/> 
                    <input type="text" style={this.titleStyle}  className="form-control" aria-label="..." placeholder='Enter a suitable title'/>
                    
                    {this.props.counter.map((count,index)=>{
                        return(
                        <div className="row" >
                            <div className="col-lg-12">
                            <div className="input-group">
                            <span>
                                <input type="checkbox" style={this.checkBoxStyle} onClick={()=>this.props.onCheckBoxClick(count)} aria-label="..."/>
                            </span>
                                <input type="text" style={this.inputStyle1}   key={index} id={index}   className="form-control" aria-label="..."/>
                                <span style={this.textStyle} >
                                    {this.props.mssg(index)}
                                </span>
                                <Button  style={this.deletestyle} onClick={()=> this.props.onDelete(count.id)}>
                                <i className= 'fa fa-minus'></i>
                            {/* <Glyphicon glyph="glyphicon glyphicon-plus" /> */}
                            </Button>
                            </div>
                            </div>
                    </div>);}
                    )}
                </div>
                <ButtonToolbar >
                    <ButtonGroup>
                    <Button  style={this.styles2} onClick={()=>this.props.onAdd()}>
                    <i className= 'fa fa-plus'></i>
                        {/* <Glyphicon glyph="glyphicon glyphicon-plus" /> */}
                    </Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <span style={this.bottomStyle}><i>Everything that is worth doing, is worth doing well</i></span>
            </div>
         );
    }
}
 
export default Entry;