import React from 'react'
import { Row, Col, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

import './Profile.scss'

export default class Profile extends React.Component {

    // onClickSignIn = () => this.props.history.push('/login');
    // onClickSignUp = () => this.props.history.push('/signup');

    render() {
        let title = "";
        if (Meteor.user() !== undefined && Meteor.user() !== null){
            title = Meteor.user().username;
        }

        return (
            <Row>
                <Col span={8} offset={8}>
                    <Card
                        style={{ marginTop: 40 }}
                        actions={[
                            <Icon type="setting" key="setting" />,
                            <Icon type="edit" key="edit" />,
                            <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={title}
                            description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
        )
    }
}