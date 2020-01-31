import React from 'react'
import { Row, Col, Icon, Avatar, List, Modal } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { withTracker } from 'meteor/react-meteor-data';
import { Meetings } from '../../../../ui/components/Navbar/components/BadgeIndicator/BadgeIndicator'
import EndMeetingModal from './components/EndMeetingModal'
import moment from 'moment';

class MyMeetings extends TrackerReact(React.Component) {

    state = {
        visible: false,
        id: 0
    }
    handleOk = e => {
        this.setState({
            visible: false,
        }, () => this.endMeeting(this.state.id, 3));
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    
    endMeeting = (id, status) => {
        Meteor.call('updateStatusMeeting', { id, status })
    }

    changeOpenModal = (id) => {
        this.setState(state => ({ visible: !state.visible, id: id }))
    }

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
                                title={<a href="https://ant.design">{item.nameGuest} - {item.nameMaster}</a>}
                            />
                            <span>
                                {
                                    moment(item.date).format('YYYY-MMM-DD HH:mm')
                                }
                                {" "}
                                {
                                    statusIcon[item.status]
                                }
                                {" "}
                                {
                                    item.status === 3 ?
                                        <span>this meeting is over</span> :
                                        <a onClick={() => this.changeOpenModal(item._id)} key="list-loadmore-edit">End meeting</a>
                                }
                            </span>
                        </List.Item>
                    )}
                />}
                <Modal
                    width={700}
                    title="End meeting"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <EndMeetingModal {...meeting.find(item => item._id === this.state.id)} />
                </Modal>
            </>
        )
    }
}

export default withTracker(() => {
    const meetingsSub = Meteor.subscribe('Meeting');
    const meeting = Meetings.find({ $or: [{ idMaster: Meteor.userId() }, { idGuest: Meteor.userId() }], $or: [{ status: 1 }, { status: 3 }] }).fetch();
    const meetingsReady = meetingsSub.ready() && !!meeting;
    console.log(meeting, "meeting123")
    return {
        meetingsReady,
        meeting
    };
})(MyMeetings);
