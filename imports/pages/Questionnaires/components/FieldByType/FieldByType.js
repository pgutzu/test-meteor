import React from 'react'
import { Form, Radio } from 'antd';

class FieldByType extends React.Component {
    render() {
        const { label, nameField, form } = this.props;
        const { getFieldDecorator } = form;

        return <Form.Item label={label}>
            {getFieldDecorator(nameField)(
                <Radio.Group onChange={this.onChange}>
                    <Radio value={1}></Radio>
                    <Radio value={2}></Radio>
                    <Radio value={3}></Radio>
                    <Radio value={4}></Radio>
                    <Radio value={5}></Radio>
                </Radio.Group>
            )}
        </Form.Item >
    }
}

export default FieldByType;