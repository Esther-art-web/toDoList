import React, { useContext } from 'react';
import img from '../icons.png';
import {TaskContext} from '../context/TaskContext'

const NavBar = () => {
    const {task} = useContext(TaskContext);
    return ( 
        <div >
            <nav className="navbar navbar-default" >
                <div className="container-fluid" >
                    <div className="navbar-header navbar-brand " >
                    <h1>Taskify <img src={img} alt=''/>
                    <span className="badge m-2 badge-cyan m-2">{task.counters.length}</span>
                    </h1>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar; 
