import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

class Share extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }
    render() {
        const fb_url = "https://www.facebook.com/sharer/sharer.php?u="+this.props.url,
            tw_url = "https://twitter.com/intent/tweet/?url="+this.props.url
        
        return (<div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <a target="_blank" rel="noopener noreferrer" href={fb_url}>
                            <Image width="300px" src="https://giveeasy.zendesk.com/hc/article_attachments/360029896734/mceclip2.png" rounded alt="Fb share"/>
                        </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <a target="_blank" rel="noopener noreferrer" href={tw_url}>
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