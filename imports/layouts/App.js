/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout, Row, Col, Card, Divider } from 'antd';

// import navbar
import Navbar from '../ui/components/Navbar';

// import routes
import Events from '../pages/Events';
import JoinCode from '../pages/JoinCode';
import Users from '../pages/Users';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import MessagesList from '../pages/Chat/components/MessagesList';

// import Spinner
import Spinner from '../ui/components/Spinner';

// import hoc to pass additional props to routes
import PropsRoute from '../pages/PropsRoute';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const App = props => (
    <Router>
        <div className="main-layout">
            <Layout>
                <Header>
                    <PropsRoute component={Navbar} {...props} />
                </Header>
                <Row>
                    <Col span={4}>
                        <Card
                            hoverable
                            style={{ marginTop: 100 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={14} offset={1}>
                        <Content style={{ overflow: 'auto', height: '83vh' }}>
                            <main>
                                <Switch>
                                    <PropsRoute exact path="/" component={Events} {...props} />
                                    <PropsRoute path="/join" component={JoinCode} {...props} />
                                    <PropsRoute path="/users" component={Users} {...props} />
                                    <PropsRoute path="/login" component={Login} {...props} />
                                    <PropsRoute path="/signup" component={Signup} {...props} />
                                    <PropsRoute path="/auth" component={Auth} {...props} />
                                    <PropsRoute path="/profile" component={Profile} {...props} />
                                    <PropsRoute path="/chat" component={MessagesList} {...props} />

                                </Switch>
                            </main>
                        </Content>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={4} offset={1}>
                        <Card
                            hoverable
                            style={{ marginTop: 100 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
                <Footer style={{ textAlign: 'center' }}>Speed Coding © 2020 Created by 1000Geeks</Footer>
            </Layout>
        </div>
    </Router>

);

App.propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    userReady: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
};

export default withTracker(() => {
    const userSub = Meteor.subscribe('user');
    const user = Meteor.user();
    const userReady = userSub.ready() && !!user;
    const loggingIn = Meteor.loggingIn();
    const loggedIn = !loggingIn && userReady;
    return {
        loggingIn,
        userReady,
        loggedIn,
    };
})(App);
