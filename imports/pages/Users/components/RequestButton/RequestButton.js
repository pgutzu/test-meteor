import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Button } from 'antd'

class RequestButton extends TrackerReact(React.Component) {

    state = {
        statusButton: this.props.status === 4 ? true : false
    }


    sendRequestMeeting = e => {
        const { id, name, date } = this.props;
        const data = {
            idMaster: Meteor.userId(),
            nameMaster: Meteor.user().username,
            idGuest: id,
            nameGuest: name,
            date: date,
            status: 0
        };
        Meteor.call('sendRequest', data);
        this.setState(state => ({
            statusButton: !state.statusButton,
        }));
    };

    render() {
        const { statusButton } = this.state;
        const style = { backgroundColor: `${statusButton ? 'green' : 'red'}`, color: 'white', borderRadius: '30px' }

        return <Button
            onClick={() => this.sendRequestMeeting()}
            style={style}
            disabled={!statusButton}
        >
            Continue </Button>
    }
}


export default RequestButton;