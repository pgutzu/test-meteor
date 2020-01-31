import React from 'react'
import { Row, Col, Icon, Avatar, List } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { withTracker } from 'meteor/react-meteor-data';
import { Meetings } from '../../../../ui/components/Navbar/components/BadgeIndicator/BadgeIndicator'
import moment from 'moment';

class MyRequest extends TrackerReact(React.Component) {

    render() {

        const { meeting } = this.props;

        const statusIcon = [
            <Icon style={{ color: 'blue' }} type="check-circle" />,
            <Icon style={{ color: 'green' }} type="check-circle" />,
            <Icon style={{ color: 'red' }} type="check-circle" />,
            <Icon style={{ color: 'orange' }} type="check-circle" />
        ];

        return (
            <>
                {meeting && <List
                    // size="small"
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={meeting}
                    renderItem={item => (
                        <List.Item >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.nameGuest}</a>}
                            />
                            <span>
                                {
                                    statusIcon[item.status]
                                }
                                {" "}
                                {
                                    moment(item.date).format('YYYY-MMM-DD HH:mm')
                                }
                            </span>
                        </List.Item>
                    )}
                />}
            </>
        )
    }
}

export default withTracker(() => {
    const meetingsSub = Meteor.subscribe('Meeting');
    const meeting = Meetings.find({ idMaster: Meteor.userId(), status: 0 }).fetch();
    const meetingsReady = meetingsSub.ready() && !!meeting;
    return {
        meetingsReady,
        meeting
    };
})(MyRequest);
