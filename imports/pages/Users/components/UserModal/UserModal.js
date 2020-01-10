import React from 'react'
import { Avatar, Button, Row, Col,Icon, Timeline } from 'antd'

class UserModal extends React.Component {

    state = {
        visible: false
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { avatar, name, company, description, availableTime } = this.props;
        const descriptionStep = <>
            <p>{name} is available</p>
            <Button style={{ backgroundColor: 'green', color: 'white', borderRadius: '30px' }}>Continue</Button>
        </>
        return <Row>
            <Col span={14}>
                <Row>
                    <Avatar size={64} src={avatar} />
                </Row>
                <Row>
                    <span><span style={{ color: 'black', fontWeight: 'bold' }}>{name}</span> ⌾ <span style={{ color: 'gray' }}>{company}</span></span>
                    <p>{description}</p>
                </Row>
            </Col>
            <Col span={10}>
                <Timeline>
                    {
                        availableTime.map(item => <Timeline.Item color="red" dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} >{item.date}  {descriptionStep}</Timeline.Item>)
                    }
                </Timeline>
            </Col>
        </Row>
    }
}

export default UserModal;