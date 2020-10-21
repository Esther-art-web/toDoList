import React, { Component } from 'react';


class NavBar extends Component {
    state = {  }
    styles={
        textAlign: 'center',
        backgroundColor: '#5f8f8f',
        color: 'white',
        position: 'relative',
        
    }
    styles2={
        position: 'fixed',
        width: '100%',
        backgroundColor: '#5f8f8f',
        color: 'white',
        zIndex: 1,
        

    }
    iconStyle={
        width:20,
        height: 20,
        fontSize: 15,
        position: 'absolute',
        left: 170

    }
    render() { 
        return ( 
            <div style={this.styles}>
                <nav className="navbar navbar-default" style={this.styles2}>
                    <div className="container-fluid" >
                        <div className="navbar-header navbar-brand " >
                        <h1>To-Do <i className="fa fa-clipboard"></i>
        <span className="badge m-2 badge-info m-2" style={this.iconStyle}>{this.props.counter.length}</span>
                        </h1>
                        </div>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;