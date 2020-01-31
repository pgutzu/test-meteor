import React from 'react'
import { Row, Col, Card, Divider, Button } from 'antd';

import './Auth.scss'

export default class Auth extends React.Component {

    onClickSignIn = () => this.props.history.push('/login');
    onClickSignUp = () => this.props.history.push('/signup');

    render() {
        const title = <span>Join New Event →</span>
        return (
            <>
                <Row>
                    <Col span={8} offset={8}>
                        <h1 align="center">Meet new people at events and conferences</h1>
                        <p align="center">
                            Sign in to access your profile and book meetings with the most relevant people at events.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={8}>
                        <Button
                            block
                            type="primary"
                            icon="poweroff"
                            onClick={this.onClickSignIn}
                        >
                            Sign in with NAMEAPP
                        </Button>
                        <Divider>No account? Create one.</Divider>
                        <Button
                            block
                            type="primary"
                            icon="poweroff"
                            onClick={this.onClickSignUp}
                        >
                            Create NAMEAPP account
                        </Button>
                        <p className="margin" align="center">
                            Signing in means you accept our <span className="green">Terms & Privacy Policy </span>
                            NAMEAPP is the world's leading  <span className="green">event networking software</span>
                        </p>
                    </Col>
                </Row >
            </>
        )
    }
}