import React from 'react'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

class Footer extends React.Component{
    render(){
        let text1 = <span>React Bootstrap is awesome.</span>
        let text2 = <span>Please contact Najeeb Arif.</span>
        return (
            <Container id='footer' fluid>
                <Row>
                    <Col>{text1}</Col>
                    <Col xs={6}></Col>
                    <Col>{text2}</Col>
                </Row>
            </Container>
            
        )
    }
}

export default Footer