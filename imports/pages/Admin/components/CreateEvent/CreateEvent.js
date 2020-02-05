import React from 'react';
import { Modal, Button, Popover, Row, Collapse, Icon } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Events } from '../../../../api/event'
import FormCreateEvent from './components/FormCreateEvent'
const { Panel } = Collapse;

const genExtra = (id) => (
    <Popover content={
        <div>
            <Button type="danger" onClick={() => Events.remove(id)}> Delete</Button>
        </div>
    }>
        <Icon
            type="setting"
            onClick={event => {
                event.stopPropagation();
            }}
        />
    </Popover>
);

class CreateEvent extends TrackerReact(React.Component) {

    state = { visible: false };

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

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const event = Events.find({}).fetch();
        const text = (answer) => <pre style={{ paddingLeft: 24 }} className="language-bash">{JSON.stringify(answer, null, 2)}</pre>;
        const columns = event.map(item => <Panel extra={genExtra(item._id)} header={item.title} key={item._id}>{text(item.code)}</Panel>)
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Button type="primary" style={{ marginBottom: "10px" }} onClick={this.showModal}>
                    Create sub-event
                </Button>
                <Modal
                    title="Create event"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <FormCreateEvent handleOk={this.handleOk} />
                </Modal>
                <Row gutter={16}>
                    <Collapse bordered={false}>
                        {columns}
                    </Collapse>
                </Row>
            </div>
        )
    }
}
export default CreateEvent;