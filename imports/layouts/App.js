/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout, Row, Col, Card, Divider, Modal } from 'antd';

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
import Questionnaires from '../pages/Questionnaires';
import Admin from '../pages/Admin';
import Advertiser from '../pages/Advertiser';
import MessagesList from '../pages/Chat/components/MessagesList';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import AdvertisingBanner from '../ui/components/AdvertisingBanner'
// import Spinner
import { StartQuestionarie } from '../api/startQuestionarie';
import { Advertisings } from '../pages/Advertiser/components/CreateAdvertising/CreateAdvertising';

// import hoc to pass additional props to routes
import PropsRoute from '../pages/PropsRoute';
import 'antd/dist/antd.css';
import Questionnaries from '../pages/Questionnaires';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;


class App extends TrackerReact(React.Component) {

    state = {
        visible: true
    }

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const props = this.props;
        if (props.loggedIn) {
            return null;
        }
        return (
            <Router>
                <div className="main-layout">
                    <Layout>
                        <Header>
                            <PropsRoute component={Navbar} {...props} />
                        </Header>
                        <Row>
                            <Col span={4}>
                                {
                                    Advertisings.findOne({}, { sort: [['createdAt', 'desc']] }) && <AdvertisingBanner {...Advertisings.findOne({}, { sort: [['createdAt', 'desc']] })} />
                                }
                            </Col>
                            <Divider type="vertical" />
                            <Col span={14} offset={1}>
                                <Content style={{ overflow: 'auto', height: '87vh' }}>
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
                                            <PropsRoute path="/questionnaires" component={Questionnaires} {...props} />
                                            {
                                                Meteor.users.findOne({ _id: Meteor.userId() }) && Meteor.users.findOne({ _id: Meteor.userId() }).emails !== undefined ?
                                                    Meteor.users.findOne({ _id: Meteor.userId() }).emails[0].address === "pgutzu@gmail.com" &&
                                                    <PropsRoute path="/admin" component={Admin} {...props} />
                                                    :
                                                    null
                                            }
                                            {
                                                Meteor.users.findOne({ _id: Meteor.userId() }) && Meteor.users.findOne({ _id: Meteor.userId() }).emails !== undefined ?
                                                    Meteor.users.findOne({ _id: Meteor.userId() }).emails[0].address === "pgutzu11@gmail.com" &&
                                                    <PropsRoute path="/advertiser" component={Advertiser} {...props} />
                                                    :
                                                    null
                                            }
                                        </Switch>
                                    </main>
                                </Content>
                                {
                                    StartQuestionarie.findOne({}) && StartQuestionarie.findOne({}).status &&
                                    Meteor.users.findOne({ _id: Meteor.userId() }) && Meteor.users.findOne({ _id: Meteor.userId() }).emails[0].address !== "pgutzu@gmail.com" &&
                                    <Modal
                                        title="Questionnaries"
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                    >
                                        <Questionnaries />
                                    </Modal>
                                }

                            </Col>
                            <Divider type="vertical" />
                            <Col span={4} offset={1}>
                                {
                                    Advertisings.findOne({}, { sort: [['createdAt', 'desc']] }) && <AdvertisingBanner {...Advertisings.findOne({}, { sort: [['createdAt', 'desc']] })} />
                                }
                            </Col>
                        </Row>
                        <Footer style={{ textAlign: 'center' }}>Speed Coding © 2020 Created by 1000Geeks</Footer>
                    </Layout>
                </div>
            </Router>
        )
    }
}

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
