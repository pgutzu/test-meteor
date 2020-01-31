import React from 'react'
import { Row, Col, Icon, Avatar, List } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { withTracker } from 'meteor/react-meteor-data';
import { Meetings } from '../../../../ui/components/Navbar/components/BadgeIndicator/BadgeIndicator'
import moment from 'moment';

class UsersListRequest extends TrackerReact(React.Component) {


    changeStatus = (id, status) => Meteor.call('updateStatusMeeting', { id, status });

    render() {

        const { meeting } = this.props;
        console.log(meeting, "meeting")
        return (
            <>
                {meeting && <List
                    // size="small"
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={meeting}
                    renderItem={item => (
                        <List.Item
                            actions={item.status === 1 ? [<span key="list-loadmore-edit"><Icon style={{ color: 'green' }} type="check-circle" /> {" "}you confirmed</span>] : [
                                <a onClick={() => this.changeStatus(item._id, 1)} key="list-loadmore-edit">accept</a>,
                                <a onClick={() => this.changeStatus(item._id, 2)} key="list-loadmore-more">reject</a>]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.nameMaster}</a>}
                            />
                            <div>
                                {
                                    moment(item.date).format('YYYY-MMM-DD HH:mm')
                                }
                            </div>
                        </List.Item>
                    )
                    }
                />}
            </>
        )
    }
}

export default withTracker(() => {
    const meetingsSub = Meteor.subscribe('Meeting');
    const meeting = Meetings.find({ idGuest: Meteor.userId(), status: 0 }).fetch();
    const meetingsReady = meetingsSub.ready() && !!meeting;
    return {
        meetingsReady,
        meeting
    };
})(UsersListRequest);
