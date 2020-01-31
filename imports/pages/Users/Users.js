import React from 'react'
import { List, Avatar, Button, Row, Modal, Col, Tabs, Icon } from 'antd'
import UserModal from './components/UserModal/UserModal'
import SubEvents from '../SubEvents'
import UserToUserChat from './components/UserToUserChat'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import './Users.scss'
import { NavLink } from 'react-router-dom'
const { TabPane } = Tabs;
class Users extends TrackerReact(React.Component) {

    state = {
        id: 0,
        visible: false,
        type: 1
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    changeOpenModal = (id, type) => this.setState(state => ({ visible: !state.visible, id: id, type: type }));

    render() {

        let users = Meteor.users.find({}, { _id: false }).fetch()
            .filter(item => item._id !== Meteor.userId())
            .map(({ _id, username = "Vladimir Putin", profile }) => ({
                id: _id,
                name: username,
                company: '1000Geeks',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley.',
                match: 1,
                matches: 2,
                availableTime: profile.availableTime,
                avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            }))

        const { visible, type } = this.state;
        return <>
            {
                Meteor.userId() === null ?
                    <div> please login</div>
                    :
                    <Row>
                        <Col span={12} offset={5}>
                            <img src={"https://next.brella.io/static/media/join-event-header.a955f4e7.png"} />
                        </Col>
                        <Col span={3} offset={8}>
                            <NavLink to={'/chat'}>go to general chat</NavLink>
                        </Col>
                        <Col span={24}>

                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="Users" key="1">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={users}
                                        renderItem={item => (
                                            <List.Item
                                            >
                                                <List.Item.Meta
                                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                    title={<span>
                                                        <span style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</span> ⌾
                                                <span style={{ color: 'gray' }}>{item.company}</span>
                                                        <Icon type="message" onClick={() => this.changeOpenModal(item.id, "chat")} />
                                                    </span>}
                                                    description={<div>
                                                        <span style={{ color: 'green' }}>{item.match} match</span> - <span style={{ color: 'red' }}>{item.matches} matches</span>
                                                        <p>{item.description}</p>
                                                        <Button onClick={() => this.changeOpenModal(item.id, "meeting")} style={{ backgroundColor: 'green', color: 'white', borderRadius: '30px' }}>Suggest messaging</Button>
                                                    </div>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </TabPane>
                                <TabPane tab="Sub-events" key="2">
                                    <SubEvents />
                                </TabPane>
                            </Tabs>


                        </Col>
                    </Row>
            }
            <Modal
                width={700}
                title="Basic Modal"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleOk}
            >
                {
                    type === 'chat' ? <UserToUserChat _id={this.state.id} /> : <UserModal {...users.find(item => item.id === this.state.id)} />
                }
            </Modal>
        </>


    }
}

export default Users;