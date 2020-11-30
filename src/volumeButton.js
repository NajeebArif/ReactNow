import React from 'react'
import Button from 'react-bootstrap/Button'

const VolumeButtonUi = props=> <Button onClick={props.handler} variant="danger">Click to increase the Volume. Current Volume is: {props.volume}</Button>

class VolumeButton extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            volume: 0
        }
    }

    handleClick(event){
        this.setState({volume: ++this.state.volume})
    }

    render(){
        return (
            <VolumeButtonUi handler={this.handleClick} volume={this.state.volume} />
        )
    }
}

export default VolumeButton