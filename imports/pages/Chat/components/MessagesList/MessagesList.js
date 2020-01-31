import React from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import Message from '../Message'
import { Row, Col, Input } from 'antd';

export const Messages = new Mongo.Collection("Messages", {});

class MessagesList extends TrackerReact(React.Component) {

    state = {
        text: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const message = this.state.text.trim();
        const data = {
            time: new Date(),
            text: message,
            author: Meteor.user().username
        };

        Messages.insert(data);
        this.setState({ text: '' })
    }

    changeMessage = (e) => this.setState({ text: e.target.value })
    deleteMessageById = (id) => Messages.remove(id);

    render() {
        return (
            <div >
                <Row >
                    <center>
                        <h1>Chat</h1>
                    </center>
                </Row>
                <Row>
                    <Col span={20} offset={1} style={{ maxHeight: '75vh', minHeight: '75vh', overflowY: 'scroll' }}>
                        {Messages.find({}).fetch().sort((a, b) => b.time - a.time).map((message) => <div key={message._id}>
                            <Message message={message} deleteMessageById={this.deleteMessageById} />
                        </div>)}
                    </Col>
                </Row>
                <Row >
                    <Col span={20} offset={1}>
                        <form onSubmit={this.handleSubmit} >
                            <Input placeholder="Basic usage" value={this.state.text} onChange={this.changeMessage} />
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MessagesList;