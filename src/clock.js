import React from 'react'
import {Alert} from 'react-bootstrap'

import * as Icon from 'react-bootstrap-icons'

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.launchClock()
        this.state = {
            timeString: (new Date()).toLocaleString()
        }
    }

    launchClock() {
        setInterval(()=>{
            console.log('updating time...')
            this.setState({
                timeString: (new Date()).toLocaleString()
            })
        },1000)
    }

    render(){
        return (
            <Alert variant='info'>
                <Icon.Watch />: {this.state.timeString}
            </Alert>
        )
    }
}

export default Clock