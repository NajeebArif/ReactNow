import React from 'react'

class CustomCheckBox extends React.Component{
    constructor(props){
        super(props)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.state = {
            checkBoxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            }
        }
    }

    handleCheckBox(event){
        let obj = Object.assign(this.state.checkBoxGroup)
        obj[event.target.value] = event.target.checked
        this.setState({checkBoxGroup:obj})
    }

    render(){
        return <form>
            <input type='checkbox' name='checkboxGroup' value='node' checked={this.state.checkBoxGroup['node']} onChange={this.handleCheckBox}/>
            <input type='checkbox' name='checkboxGroup' value='react' checked={this.state.checkBoxGroup['react']} onChange={this.handleCheckBox}/>
            <input type='checkbox' name='checkboxGroup' value='express' checked={this.state.checkBoxGroup['express']} onChange={this.handleCheckBox}/>
            <input type='checkbox' name='checkboxGroup' value='mongodb' checked={this.state.checkBoxGroup['mongodb']} onChange={this.handleCheckBox}/>
        </form>
    }
}

class CustomRadioButton extends React.Component{
    constructor(props){
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            }
        }

    }

    handleRadio(event){
        let obj = {} //erase the older values because the radio button can have only one value selected at once.
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup:obj})
    }

    render(){
        return <form>
            <input type='radio' name='radioGroup' value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio}/>
            <input type='radio' name='radioGroup' value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio}/>
            <input type='radio' name='radioGroup' value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio}/>
        </form>
    }

}

const CustomElements = props=> <div>
    <div><CustomCheckBox/></div>
    <div><CustomRadioButton/></div>
</div>

export default CustomElements