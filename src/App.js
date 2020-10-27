import React ,{Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Entry from './components/entry';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      counters: [ ],
      selectedCounter:null,
      checked:false,
      value:''
      
    };
  }
 
  nextId=()=>{
    this.uniqueId= this.uniqueId || 0
    return (this.uniqueId++);
  }

  handleEntry=()=>{
    const counters=  [...this.state.counters,
                              {id:this.nextId(),
                                value: this.state.value,
                                checked:false}]
    this.setState({counters})
    this.setState({task: ''})

  } 
  handleChange=(event)=>{
    this.setState({task:event.target.value })
    this.setState({value: event.target.value})
    console.log(this.state.value)
  } 
  handleDelete= (counterIndex) =>{
    const counters= this.state.counters.filter(counter => counter.id !==counterIndex);
    this.setState({counters});
  }
  handleCheckBoxClick=(event,counterIndex)=>{
    console.log(event.target.id)
    console.log(counterIndex)
    if(event.target.id==counterIndex){
      var prevCounter=this.state.counters.filter((c)=> c.id!== this.state.edit)
      var counter=this.state.counters.filter((c)=> c.id=== counterIndex)[0]
      counter.checked===false? 
                            counter.checked=true : 
                            counter.checked=false
      var counters=[counter, ...prevCounter]
      this.setState({counters})  
    }                    
  }
  handleEdit=(event,index)=>{
    if (event.currentTarget.id==index){
      this.state.edit= index
      this.state.task=''
      document.getElementsByClassName('modal-box')[0].style.display='block';
      
    }
  }
  handleMssg=(index)=>{
    if (this.state.counters[index].checked===false)
     return (<span>Undone</span>);
    else{
      return (<span>Done</span>);
    } 
  }
  handleTextEdit=()=>{
    var prevCounter=this.state.counters.filter((c)=> c.id!== this.state.edit)
    const counters=  [...prevCounter,
      {id:this.state.edit,
        value: this.state.value,
        checked:false}
    ]
    this.setState({counters})
    this.setState({task: ''})
    document.getElementsByClassName('modal-box')[0].style.display='none';
    
    

    // document.getElementById('taskEntry').value=''
  }

  render() { 
    console.log(this.state.counters);
    return ( 
    <React.Fragment>
      <NavBar counter={this.state.counters}/>
      <Entry counter={this.state.counters} task={this.state.task} onCheckBoxClick={this.handleCheckBoxClick} task={this.state.task} onTextChange={this.handleChange} onAdd={this.handleEntry}  onDelete={this.handleDelete} onTextEdit={this.handleTextEdit} onEdit={this.handleEdit} mssg={this.handleMssg}/>
    </React.Fragment> );
  }
}
 

export default App;
