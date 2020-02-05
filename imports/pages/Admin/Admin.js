import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Tabs, Row, Col } from 'antd'
import ResultQuestionaries from './components/ResultQuestionaries'
import AnsweredTable from './components/AnsweredTable'
import CreateSubEvents from './components/CreateSubEvents'
import CreateEvent from './components/CreateEvent'
import Questionarie from './components/Questionarie'
const { TabPane } = Tabs;
export const Questionnarie = new Mongo.Collection('Questionnarie');

class Admin extends TrackerReact(React.Component) {
    render() {
        return <>
            <Row style={{ margin: "2vh" }}>
                <Col offset={8} span={6}>
                    <h1>This is Admin page</h1>
                </Col>
            </Row>
            <Tabs type="card">
                <TabPane tab="Result questionnarie" key="1">
                    <ResultQuestionaries />
                </TabPane>
                <TabPane tab="Answers" key="2">
                    <AnsweredTable />
                </TabPane>
                <TabPane tab="Create sub-event" key="3">
                    <CreateSubEvents />
                </TabPane>
                <TabPane tab="Start Questionnarie" key="4">
                    <Questionarie />
                </TabPane>
                <TabPane tab="Create Event" key="5">
                    <CreateEvent />
                </TabPane>
            </Tabs>
        </>
    }
}

export default Admin;