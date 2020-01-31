import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Avatar, Row, Col, Icon, Timeline } from 'antd'
import moment from 'moment';
import RequestButton from '../RequestButton'



class UserModal extends TrackerReact(React.Component) {

    render() {
        const { avatar, name, company, description, availableTime } = this.props;

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
                        availableTime.map((item, i) => <Timeline.Item
                            key={i}
                            color="blue"
                            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} >
                            {moment(item.date).format('YYYY-MM-DD HH:mm')}
                            <>
                                <p>{name} is available</p>
                                <RequestButton date={item.date} status={item.status} {...this.props} />

                            </>
                        </Timeline.Item>)
                    }
                </Timeline>
            </Col>
        </Row>
    }
}

export default UserModal;