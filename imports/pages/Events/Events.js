import React from 'react'
import { Row, Col, Card } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

const { Meta } = Card;

export default class Events extends TrackerReact(React.Component) {

    onClickEvent = () => this.props.history.push('/join');

    render() {
        const title = <span>Join New Event →</span>
        return (
            <>
                {
                    Meteor.userId() === null ?
                        < Row >
                            <Col style={{ marginBottom: '50px', fontSize: '24px', fontWeight: '500' }} span={5} offset={11}>
                                <h1>please login</h1>
                            </Col>
                        </Row>
                        :
                        <>
                            < Row >
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
                }
            </>
        )
    }
}