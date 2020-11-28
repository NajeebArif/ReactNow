import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Footer from './footer'
import Header from './header'


class MyDateTimeComponent extends React.Component{
    render(){
        let dateTimeString = new Date().toLocaleString()
        return(
        <span>Current time is {dateTimeString}</span>
        )
    }
}

class ProfileLink extends React.Component{
    render(){
        return <a {...this.props} href = {this.props.url}
            title = {this.props.label}
    target = '_blank'>{this.props.username}</a>
    }
}

class HelloWorld extends React.Component{
    
    render(){
        const h1String = <h1>Hello World!</h1>
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm' style={{border: '1px black solid', margin:'5px', padding:'5px'}}>
                        {h1String}
                    </div>
                    <div className='col-sm' style={{border: '1px red solid', margin: '5px', padding:'5px'}}>
                        <h6><MyDateTimeComponent /></h6>
                    </div>
                    <div className='col-sm' class='alert alert-primary' role='alert' style={{margin: '5px', padding:'5px'}}> 
                        <ProfileLink id='profile-link' className='alert-link' url='/user/profile' label='Profile Link' username ='Arif'/>
                    </div>
                </div>
            </div>
        )
    }
}

class Body extends React.Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col><Header/></Col>
                </Row>
                <Row>
                    <Col><HelloWorld /></Col>
                </Row>
                <Row>
                    <Col><Footer/></Col>
                </Row>
            </Container>
            
        )
    }
}

ReactDOM.render(
    <Body/>,
    document.getElementById('root')
)


