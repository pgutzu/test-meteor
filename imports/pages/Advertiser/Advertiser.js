import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Tabs, Row, Col } from 'antd'
import CreateAdvertising from './components/CreateAdvertising'
const { TabPane } = Tabs;

class Advertiser extends TrackerReact(React.Component) {
    render() {
        return <>
            <Row style={{ margin: "2vh" }}>
                <Col offset={8} span={6}>
                    <h1>Advertiser</h1>
                </Col>
            </Row>
            <Tabs type="card">
                <TabPane tab="Create advertising" key="1">
                    <CreateAdvertising />
                </TabPane>
            </Tabs>
        </>
    }
}

export default Advertiser;