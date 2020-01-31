import React from 'react';
import { Collapse, Row } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Questionnarie } from '../../Admin'
const { Panel } = Collapse;

class AnsweredTable extends TrackerReact(React.Component) {
    render() {

        const answers = Questionnarie.find({}).fetch();

        const text = (answer) => <pre style={{ paddingLeft: 24 }} className="language-bash">{JSON.stringify(answer, null, 2)}</pre>;

        const columns = answers.map(item => <Panel header={item.nameAnswering} key={item._id}>{text(item.values)}</Panel>)

        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Collapse bordered={false}>
                        {columns}
                    </Collapse>
                </Row>
            </div>
        )
    }
}
export default AnsweredTable;