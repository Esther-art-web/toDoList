import React  from 'react';
import NavBar from './components/NavBar';
import TaskEntry from './components/TaskEntry';
import TaskContextProvider from './context/TaskContext';
// import { connect } from 'react-redux';

const App = () => {

  return ( 
    <TaskContextProvider>
      <NavBar/> 
      <TaskEntry/>
    </TaskContextProvider>
    );
}
  
export default App;