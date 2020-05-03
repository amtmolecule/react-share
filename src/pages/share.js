import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

class Share extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            location: window.location.href
        }
    }
    render() {        
        return (<div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.location}`}>
                            <Image width="300px" src="https://giveeasy.zendesk.com/hc/article_attachments/360029896734/mceclip2.png" rounded alt="Fb share"/>
                        </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet/?url=${this.state.location}`}>
                            <Image width="300px" src="https://giveeasy.zendesk.com/hc/article_attachments/360030714313/mceclip3.png" rounded alt="Tw share"/>
                        </a>
                    </Col>
                </Row>
            </Container>      
            </div>
        )
    }    
}

export default Share;