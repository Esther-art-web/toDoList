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
      checked:false
      
    };
    
    // this.handleChange = this.handleChange.bind(this);
  }
  //  handleChange(event) {
  //    var counters= this.state.counters.map(c=>{c.value= event.target.value})
  //   // var counters= this.state.counters[index].value= event.target.value;
  //   this.setState({counters});
    // this.setState({value: Event.target.value});
  // }
  nextId=()=>{
    this.uniqueId= this.uniqueId || 0
    console.log(this.uniqueId)
    return (this.uniqueId++);
  }

  handleEntry=()=>{
    const c=this.state.counters;
    const counters=  [...this.state.counters,
                              {id:this.nextId(),
                                 checked:false}]
    this.setState({counters})
  }  
  handleDelete= (counterIndex) =>{
    const counters= this.state.counters.filter(counter => counter.id !==counterIndex);
    this.setState({counters});
  }
  handleCheckBoxClick=(counter)=>{
   
  }
  handleMssg=(index)=>{
    if (this.state.counters[index].checked===false)
     return (<span>Undone</span>);
    else{
      return (<span>Done</span>);
    } 
  }
  render() { 
    console.log(this.state.counters);
    return ( 
    <React.Fragment>
      <NavBar counter={this.state.counters}/>
      <Entry counter={this.state.counters} value={this.state.counters.value} onCheckBoxClick={this.handleCheckBoxClick} onTextChange={this.handleChange} onAdd={this.handleEntry} onDelete={this.handleDelete} mssg={this.handleMssg}/>
    </React.Fragment> );
  }
}
 

export default App;
