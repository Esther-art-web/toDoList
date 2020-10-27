import React,{ useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker"
import { ButtonToolbar,ButtonGroup, Button } from 'react-bootstrap'

var dateStyle={
    position: 'absolute',
    left: 180,
    top:60
}
var inputStyle1={
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 50,
    marginLeft: '20%',
    fontSize: 15,
    padding: 20,
    display: 'block',
    width: '60%'
}
var styles2={
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    position: 'fixed',
    borderRadius:10 ,
    top: 240,
    right: 200,
    backgroundColor: '#5f8f8f'
}



const DateSelect = () => {
    // const [startDate, setStartDate] = useState(new Date());
    // return (
    //   <DatePicker id='datePicker' selected={startDate} onChange={date => setStartDate(date)} />
    // );
    const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = ({onClick }) => (
    <button className="example-custom-input" style={dateStyle}  onClick={onClick}>
      <span><i class="fa fa-calendar"></i></span>
    </button>
  );
  return (
    <DatePicker
     className='ml-5'
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
  };
const Task =(props)=>{
    return(
    <div>
        <DateSelect   />  
        <input type='text' id='taskEntry' className="form-control" style={inputStyle1} aria-label="..." placeholder='Enter a task here' onChange={(event)=>props.onTextChange(event)} value={props.task} />
        <ButtonToolbar >
            <ButtonGroup>
                <Button  style={styles2} onClick={()=>props.onAdd()} id='addTask' disabled={!props.task}>
                    <i className= 'fa fa-plus'></i>
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
        
    </div>  
    );
}

export default Task;