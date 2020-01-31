import React from 'react';
import { Row, Col, Button } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { StartQuestionarie } from '../../../../api/startQuestionarie'

class Questionarie extends TrackerReact(React.Component) {

    state = {
        status: StartQuestionarie.findOne({}) && StartQuestionarie.findOne({}).status
    }

    changeStatusQuestionnarie = () => {
        Meteor.call('updateStatusQuestionaries', { status: !this.state.status });
        this.setState(state => ({ status: !state.status }))
    }

    createQuestionarie = () => {
        Meteor.call('createQuestionarie');
    }

    render() {
        const { status } = this.state;
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={12}>
                        {
                            console.log('StartQuestionarie.find({})', StartQuestionarie.find({}).fetch())
                        }
                        {
                            StartQuestionarie.find({}).fetch().length > 0 ?
                                < Button type={!status ? "primary" : "danger"} onClick={() => this.changeStatusQuestionnarie()} >
                                    {!status ? 'Start Questionnarie' : 'End Questionnarie'}
                                </Button> :
                                < Button type="primary" onClick={() => this.createQuestionarie()} >
                                    Create Questionarie
                                </Button>

                        }
                    </Col>
                </Row>
            </div >
        )
    }
}
export default Questionarie;