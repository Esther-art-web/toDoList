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
                                checked:'Undone'}]
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
    var tasks= [...this.state.counters]
    var taskList= tasks

    if(event.target.id==counterIndex){
      // var c = tasks.filter((c)=>{ 
                       
      //                   })
      var c= tasks.filter((c)=> (c.id===counterIndex))[0]
      c.checked==='Undone'? c.checked='Done': c.checked='Undone'
          
      var pc= tasks.filter((c)=> (c.id!==counterIndex))
      
                
      var counters= [...pc,c ]
      // var counters= this.state.counters.map((c)=> {c.checked==='Undone'? c.checked='Done': c.checked='Undone'})
      this.setState({counters})
      console.log( "Previous Counter:", pc)  
      console.log( "counter:", c)
      console.log("counters:", this.state.counters)
    }                    
  }
  handleEdit=(event,index)=>{
    if (event.currentTarget.id==index){
      this.state.edit= index
      this.state.task=''
      document.getElementsByClassName('modal-box')[0].style.display='block';
      
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
      <Entry counter={this.state.counters} task={this.state.task} onCheckBoxClick={this.handleCheckBoxClick} onTextChange={this.handleChange} onAdd={this.handleEntry}  onDelete={this.handleDelete} onTextEdit={this.handleTextEdit} onEdit={this.handleEdit} mssg={this.handleMssg}/>
    </React.Fragment> );
  }
}
 

export default App;
