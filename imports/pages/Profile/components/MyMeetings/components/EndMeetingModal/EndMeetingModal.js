import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Avatar, Checkbox, Row, Col, Icon, Timeline } from 'antd'
import moment from 'moment';



class EndMeetingModal extends TrackerReact(React.Component) {

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    render() {
        const { nameMaster, nameGuest } = this.props;
        console.log(this.props, "qweqweqweqwe")

        const options = [
            { label: 'Without continuation', value: 0 },
            { label: 'Exchange of business cards / contacts', value: 1 },
            { label: 'New Meetings', value: 2 },
            { label: 'Potential business collaboration', value: 3 },
            { label: 'Make a deal', value: 4 },
        ];

        return <Row>
            <Col span={24}>
                <p>How was the meeting?</p>
                <p>What status do you end the meeting with?</p>
                <Col span={12}>
                    <Checkbox.Group
                        options={options}
                        onChange={this.onChange} />
                </Col>


            </Col>
        </Row>
    }
}

export default EndMeetingModal;