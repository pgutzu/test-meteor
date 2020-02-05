import React from 'react';
import { Button, Icon, Input, Form, Select, DatePicker } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Events } from '../../../../../../api/event'
import moment from 'moment';
import './FormCreateEvent.css'
const { TextArea } = Input;
const { Option } = Select;

class FormCreateEvent extends TrackerReact(React.Component) {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const data = {
                    ...values,
                    date: moment(values.date).format('YYYY-MM-DD HH:mm:ss')
                }
                console.log(data)
                Events.insert(data);
                this.props.handleOk()
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <Form onSubmit={this.handleSubmit} className="create-form">

                <Form.Item>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input your title!' }],
                    })(
                        <Input
                            prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Title"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input your Description!' }],
                    })(
                        <TextArea
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            rows={4}
                            placeholder="Description"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('date')(<DatePicker showTime />)}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('code', {
                        rules: [{ required: true, message: 'Please input your code!' }],
                    })(
                        <Input
                            prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="code"
                        />,
                    )}
                </Form.Item>
                {/* 
                <Form.Item>
                    {getFieldDecorator('countPlace', {
                        rules: [{ required: true, message: 'Please input your count place!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Count place"
                        />,
                    )}
                </Form.Item> */}

                {/* <Form.Item>
                    {getFieldDecorator('speaker', {
                        rules: [{ required: true, message: 'Please select speaker!' }],
                    })(
                        <Select placeholder="Please select speaker">
                            <Option value="Pasha Guzu">Pasha Guzu</Option>
                            <Option value="Gena Mitin">Gena Mitin</Option>
                            <Option value="Vladimir Putin">Vladimir Putin</Option>
                        </Select>,
                    )}
                </Form.Item> */}

                <Button type="primary" htmlType="submit" className="create-form-button">
                    Create
          </Button>
            </Form>

        )
    }
}
const WrappedFormCreateEvent = Form.create({ name: 'createEvent' })(FormCreateEvent);
export default WrappedFormCreateEvent;