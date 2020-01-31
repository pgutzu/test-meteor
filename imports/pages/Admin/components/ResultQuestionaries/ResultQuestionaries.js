import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Questionnarie } from '../../Admin'

class ResultQuestionaries extends TrackerReact(React.Component) {
    render() {
        const countUsers = Meteor.users.find({}).fetch().length;
        const countAnswers = Questionnarie.find({}).fetch().length;
        const countNotResponding = countUsers - countAnswers;


        const state = {
            labels: ['answered', "not responding"],
            datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: [
                        '#C9DE00',
                        '#B21F00'
                    ],
                    hoverBackgroundColor: [
                        '#4B5000',
                        '#501800'
                    ],
                    data: [countAnswers, countNotResponding]
                }
            ]
        }
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Answered"
                                value={countAnswers}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Not responding"
                                value={countNotResponding}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="arrow-down" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
                <Doughnut
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Response ratio to all users',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }} />
            </div>
        )
    }
}
export default ResultQuestionaries;