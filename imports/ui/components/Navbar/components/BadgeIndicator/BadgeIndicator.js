import React from 'react';
import { Icon, Badge, notification } from 'antd';
import { Meteor } from 'meteor/meteor'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { withTracker } from 'meteor/react-meteor-data';

export const Meetings = new Mongo.Collection('Meeting');

class BadgeIndicator extends TrackerReact(React.Component) {

    render() {
        const { meeting } = this.props;

        return (<Badge count={meeting.length}>
            <Icon type="user" />
            {Meteor.user().username}
            {/* {
                meeting.length > 0 && notification['info']({
                    message: `you have ${meeting.length} meeting requests`,
                    description:
                        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                })
            } */}
        </Badge>
        );
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
})(BadgeIndicator);

