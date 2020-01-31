import React from 'react';
import ContentChat from '../ContentChat'
import {
    Col,
    Card,
    Modal,
    Button,
    Icon
} from 'antd';
import moment from 'moment';

class ItemCard extends React.Component {

    state = {
        visible: false,
        status: this.props.status
    }

    subscribe = () => {
        let oldDataProfile = Meteor.users.findOne({ _id: Meteor.userId() }).profile;
        oldDataProfile.mySubEvents.push(this.props._id);
        Meteor.users.update({ _id: Meteor.userId() }, {
            $set: {
                profile: { ...oldDataProfile }
            }
        });
    }

    unSubscribe = () => {
        let oldDataProfile = Meteor.users.findOne({ _id: Meteor.userId() }).profile;
        oldDataProfile.mySubEvents.splice(oldDataProfile.mySubEvents.indexOf(this.props._id), 1)
        Meteor.users.update({ _id: Meteor.userId() }, {
            $set: {
                profile: { ...oldDataProfile }
            }
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { _id, title, description, date, speaker, countPlace = 10 } = this.props;
        let status = null;
        const mySubEvents = Meteor.users.findOne({ _id: Meteor.userId() }).profile.mySubEvents;

        const isHaveIdSubEvent = mySubEvents && mySubEvents.find(item => item === _id)

        if (isHaveIdSubEvent !== undefined && Object.keys(isHaveIdSubEvent).length !== 0) {
            status = false
        } else {
            status = true
        }

        const allSubEventByAllUsers = Meteor.users
            .find({})
            .fetch()
            .map(item => item.profile.mySubEvents)
            .reduce((current, next) => current.concat(next), [])

        const countSubscribe = allSubEventByAllUsers.filter(item => item === _id).length;


        return (
            <Col span={12} style={{ marginBottom: '1vh' }}>
                <Card
                    title={`${title}  (${countSubscribe}/${countPlace})`}
                    bordered={false}
                    extra={
                        <div>
                            {
                                !status && <Icon type="message" onClick={() => this.showModal()} />
                            }
                            {
                                " "
                            }
                            <Button
                                style={{ backgroundColor: `${status ? 'green' : 'red'}`, color: 'white' }}
                                onClick={() => status ? this.subscribe() : this.unSubscribe()}
                            >
                                {
                                    status ? 'subscribe' : 'unsubscribe'
                                }
                            </Button>
                        </div>
                    }>
                    {description}
                    <p style={{ marginTop: '10px', fontWeight: "bold" }}>Speaker: {speaker}</p>
                    <p style={{ fontWeight: "bold" }}>Date: {moment(date).format('YYYY-MM-DD HH:mm:ss')}</p>
                </Card>
                <Modal
                    title={title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleOk}
                >
                    <ContentChat _id={_id} />
                </Modal>
            </Col>
        )

    }
}

export default ItemCard;
