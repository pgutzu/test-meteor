import React from 'react'
import { Input, Row, Col, message, Button, Steps } from 'antd'
import { withTracker } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Events } from '../../api/event'
import MySkills from './components/MySkills'
import InterestingSkills from './components/InterestingSkills'
import './Steps.css'
const { Step } = Steps;

class JoinCode extends TrackerReact(React.Component) {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            current: 0
        }
    }

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    joinEvent = () => {
        const isHaveCode = this.props.eventsCode.find(item => item.code === this.state.code)
        if (isHaveCode !== undefined && Object.keys(isHaveCode).length !== 0) {
            const current = this.state.current + 1;
            this.setState({ current });
        } else {
            message.error('Join code everberb is invalid.');
        }
    }

    onChangeCode = (e) => this.setState({ code: e.target.value })

    renderFirstStep = () => <Col span={10} offset={5}>
        <Row>
            <Col span={15} offset={4}>
                <Input placeholder='Join Code' value={this.state.code} onChange={this.onChangeCode} />
            </Col>
        </Row>
        <Row>
            <Col style={{ marginTop: '20px' }} span={8} offset={8}>
                <Button style={{ backgroundColor: 'green', color: 'white', borderRadius: '30px' }} onClick={this.joinEvent}>Start Networking</Button>
            </Col>
        </Row>
    </Col>



    render() {

        const steps = [
            {
                title: 'Join Code',
                content: this.renderFirstStep(),
            },
            {
                title: 'My Skills',
                content: <MySkills next={this.next} />,
            },
            {
                title: 'Interesting Skills',
                content: <InterestingSkills {...this.props} />,
            },
        ];

        const { current } = this.state;
        return <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
        </div>
    }
}
export default withTracker(() => {
    const meetingsSub = Meteor.subscribe('eventsCode');
    const eventsCode = Events.find({}, { fields: { code: true } }).fetch();
    const meetingsReady = meetingsSub.ready() && !!meeting;
    return {
        meetingsReady,
        eventsCode
    };
})(JoinCode);