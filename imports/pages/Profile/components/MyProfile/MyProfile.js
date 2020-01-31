import React from 'react'
import { Row, Col, Form, Avatar, Divider, Button, Input, Icon } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

class MyProfile extends TrackerReact(React.Component) {
    changeInput = (e) => {
        console.log(e.target.value)
    }
    render() {

        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        }

        const buttonItemLayout = {
            wrapperCol: { span: 14, offset: 4 },
        }

        const { getFieldDecorator } = this.props.form;
        console.log(this.props, "paskpicjhvw")

        return (<Row>
            <Row>
                <Col offset={11} span={3}>
                    <Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} icon="user" size={86}>
                        {Meteor.user() && Meteor.user().username}
                    </Avatar>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={16}>
                    <Form >
                        <Col span={20}>
                            <Divider>Personal information</Divider>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="User name" {...formItemLayout}>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="your user name"
                                        onChange={(e) => this.changeInput(e)}
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label="Description" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="your description" />
                            </Form.Item>
                        </Col>
                        <Col span={20}>
                            <Divider>Social media profiles</Divider>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Linkedin" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="linkedin" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="your linkedin" />
                            </Form.Item>
                            <Form.Item label="Twitter" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="twitter" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="your twitter" />
                            </Form.Item>
                            <Form.Item label="WebSite" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="your website" />
                            </Form.Item>
                        </Col>
                        <Col span={20}>
                            <Divider>Company info</Divider>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Company name" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="company name" />
                            </Form.Item>
                            <Form.Item label="Industry" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="industry" />
                            </Form.Item>
                            <Form.Item label="Revenue" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="revenue" />
                            </Form.Item>
                            <Form.Item label="Operates in" {...formItemLayout}>
                                <Input
                                    prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="operates in" />
                            </Form.Item>
                        </Col>
                        <Form.Item {...buttonItemLayout}>
                            <Button type="primary">Save change</Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>

        </Row>
        )
    }
}
const WrappedMyProfileForm = Form.create({ name: 'my_profile' })(MyProfile);
export default WrappedMyProfileForm;
