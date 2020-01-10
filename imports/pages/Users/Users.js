import React from 'react'
import { List, Avatar, Button, Row, Modal, Col, Steps } from 'antd'
import UserModal from './components/UserModal/UserModal'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import './Users.scss'

class Users extends TrackerReact(React.Component) {

    state = {
        id: 0,
        visible: false
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    changeOpenModal = (id) => this.setState(state => ({ visible: !state.visible, id: id }));

    render() {

        let users = Meteor.users.find({}).fetch().map(({ _id, username = "Vladimir Putin" }) => ({
            id: _id,
            name: username,
            company: '1000Geeks',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            match: 1,
            matches: 2,
            availableTime: [{ date: "21.01.2020", duration: 30 }, { date: "21.01.2020", duration: 30 }, { date: "21.01.2020", duration: 30 }],
            avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        }))
        console.log(users)

        return <>
            <Row>
                <Col span={24} >
                    <List
                        itemLayout="horizontal"
                        dataSource={users}
                        renderItem={item => (
                            <List.Item
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<span><span style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</span> ⌾ <span style={{ color: 'gray' }}>{item.company}</span></span>}
                                    description={<div>
                                        <span style={{ color: 'green' }}>{item.match} match</span> - <span style={{ color: 'red' }}>{item.matches} matches</span>
                                        <p>{item.description}</p>
                                        <Button onClick={() => this.changeOpenModal(item.id)} style={{ backgroundColor: 'green', color: 'white', borderRadius: '30px' }}>Suggest messaging</Button>
                                    </div>}
                                />
                            </List.Item>
                        )}

                    />
                </Col>
            </Row>
            <Modal
                width={700}
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleOk}
            >
                <UserModal {...users.find(item => item.id === this.state.id)} />
            </Modal>
        </>
    }
}

export default Users;