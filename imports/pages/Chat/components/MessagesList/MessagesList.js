import React from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import Message from '../Message'
import { Row, Col, Input } from 'antd';
// import './pasha.scss'

Messages = new Mongo.Collection("Messages", {});

class MessagesList extends TrackerReact(React.Component) {

    state = {
        text: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let message = this.state.text.trim();

        let data = {
            time: new Date(),
            text: message
        };

        Messages.insert(data);

        this.setState({ text: '' })
    }

    changeMessage = (e) => this.setState({ text: e.target.value })


    render() {


        return (
            <div>
                <Row >
                    <center>
                        <h1>Chat</h1>
                    </center>
                </Row>

                <Row style={{ height: '100px' }}>
                    <Col span={20} offset={1}>
                        {Messages.find({}).fetch().map((message) => <Message key={message._id} message={message} />)}
                    </Col>
                </Row>

                <Row >
                    <form onSubmit={this.handleSubmit} >
                        <Input placeholder="Basic usage" value={this.state.text} onChange={this.changeMessage} />
                    </form>
                </Row>
            </div>
        )
    }
}

export default MessagesList;