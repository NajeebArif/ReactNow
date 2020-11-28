import React from 'react'
import {Spinner} from 'react-bootstrap'

class Header extends React.Component{
    render(){
        return (
            <div id='header'>
                <h1>Welcome to the React App <Spinner animation="grow"/></h1> 
            </div>
        )
    }
}

export default Header