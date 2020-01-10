import React from 'react'
import { Input, Row, Col, message, Button } from 'antd'


class JoinCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }

    joinEvent = () => {
        if (this.state.code === "1000geeks") {
            this.props.history.push('/users');
        } else {
            message.error('Join code everberb is invalid.');
        }
    }

    onChangeCode = (e) => this.setState({ code: e.target.value })

    render() {

        return <Col span={22} offset={1}>
            <img src={"https://next.brella.io/static/media/join-event-header.a955f4e7.png"} />
            <h2 align="center" style={{ margin: '30px 0px 30px 0px' }}>Enter your join code to begin networking.</h2>
            <p align="center">
                Your event organizer will share this with you. If you can't join the event, please contact your event organizer.
        </p>
            <Row>
                <Col span={15} offset={4}>
                    <Input placeholder='Join Code' value={this.state.code} onChange={this.onChangeCode} />
                </Col>
            </Row>
            <Row>
                <Col style={{ marginTop: '20px' }} span={8} offset={8}>
                    <Button style={{ backgroundColor: 'green', color: 'white', borderRadius: '30px' }} onClick={this.joinEvent}>Start Networking</Button>
                </Col>
            </Row>
        </Col>
    }
}

export default JoinCode;