import React from 'react';
import { Button, Icon, Input, Form, Select, Upload } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
// import { Advertisings } from '../../../../api/advertising'
import './FormCreateAdvertising.css'
export const Advertisings = new Mongo.Collection('Advertisings');
class FormCreateAdvertising extends TrackerReact(React.Component) {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const data = {
                    ...values,
                    createdAt: new Date()
                }
                Advertisings.insert(data);
                // this.props.handleOk()
            }
        });
    };

    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
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
                        {getFieldDecorator('link', {
                            rules: [{ required: true, message: 'Please input your Description!' }],
                        })(
                            <Input
                                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Title"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
              </Button>
                            </Upload>,
                        )}
                    </Form.Item>

                    <Button type="primary" htmlType="submit" className="create-form-button">
                        Create
          </Button>
                </Form>
            </div>
        )
    }
}
const WrappedCreateAdvertising = Form.create({ name: 'createEvent' })(FormCreateAdvertising);
export default WrappedCreateAdvertising;