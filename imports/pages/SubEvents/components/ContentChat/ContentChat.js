
import React from 'react';
import Message from '../../../Chat/components/Message'
import { Messages } from '../../../Chat/components/MessagesList/MessagesList'
import { Row, Col, Input } from 'antd';


class ContentChat extends React.Component {

    state = {
        text: ""
    }
    handleSubmit = (event) => {
        event.preventDefault();

        let message = this.state.text.trim();

        let data = {
            time: new Date(),
            text: message,
            author: Meteor.user().username,
            idChat: this.props._id
        };

        Messages.insert(data);

        this.setState({ text: '' })
    }

    changeMessage = (e) => this.setState({ text: e.target.value })
    render() {
        const { _id } = this.props;
        return (
            <Col span={24} style={{ marginBottom: '1vh' }}>
                <div >
                    <Row>
                        <Col span={24} offset={1} style={{ maxHeight: '40vh', minHeight: '40vh', overflowY: 'scroll' }}>
                            {Messages.find({ idChat: _id }).fetch().sort((a, b) => b.time - a.time).map((message) => <div key={message._id}>
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
            </Col>
        )

    }
}

export default ContentChat;
