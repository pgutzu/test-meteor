import React from 'react'
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default class Events extends React.Component {

    onClickEvent = () => this.props.history.push('/join');

    render() {
        const title = <span>Join New Event →</span>
        // console.log("pashakfwjfnw", this.props)
        // console.log("Meteor.user()", Meteor.users.find({}).fetch())
        return (
            <>
                <Row>
                    <Col style={{ marginBottom: '50px', fontSize: '24px', fontWeight: '500' }} span={1} offset={11}>
                        <h1>Events</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={3}>
                        <Card
                            hoverable
                            style={{ width: 440 }}
                            cover={<img alt="example" src="https://next.brella.io/static/media/join-event-cover-picture.beed1d93.jpg" />}
                            onClick={this.onClickEvent}
                        >
                            <Meta title={title} />
                        </Card>
                    </Col>
                </Row >
            </>
        )
    }
}