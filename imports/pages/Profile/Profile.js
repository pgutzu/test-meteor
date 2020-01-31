import React from 'react'
import { Row, Col, Card, Tabs, Avatar } from 'antd';

const { Meta } = Card;

import './Profile.scss'
import MyRequest from './components/MyRequest';
import MyProfile from './components/MyProfile';
import MyMeetings from './components/MyMeetings';
import UsersListRequest from './components/UsersListRequest';
const { TabPane } = Tabs;
export default class Profile extends React.Component {

    render() {
        let title = "";
        if (Meteor.user() !== undefined && Meteor.user() !== null) {
            title = Meteor.user().username;
        }

        return (
            <Row>
                <Col span={8} offset={2}>
                    <Card
                        style={{ marginTop: 40, width: '50vw' }}
                    >
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={title}
                            description="This is the description"
                        />
                        <Tabs defaultActiveKey="4">
                            <TabPane tab="My Requests" key="1">
                                <UsersListRequest />
                            </TabPane>
                            <TabPane tab="Sent Requests" key="2">
                                <MyRequest />
                            </TabPane>
                            <TabPane tab="My Meetings" key="3">
                                <MyMeetings />
                            </TabPane>
                            <TabPane tab="My Profile" key="4">
                                <MyProfile />
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        )
    }
}