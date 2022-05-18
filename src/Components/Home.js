import React, { Component } from 'react'
import './Home.css';
import {Row,Col} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <>

                <Row >
                    <Col lg="2">
                        <div className="box-main">
                            <div className="firsthalf">
                                <p className="text-big bcc">Junction Stickers are Here</p>
                                <p className="text-small bcc">Be mindful of the overall décor scheme and pick a sticker that goes best with the other accessories, furniture and wall colours. </p>

                            </div>

                          </div>  
                    </Col>
                    <Col lg="6">
                        <img src="https://assets-news.housing.com/news/wp-content/uploads/2020/05/12185411/How-to-use-wall-stickers-for-an-inexpensive-home-decor-makeover-FB-1200x700-compressed.jpg" alt="Laptop image" />
                    </Col>
                </Row>









            </>
        )
    }
}


export default Home;