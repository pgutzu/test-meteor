import { Accounts } from 'meteor/accounts-base';
import React from 'react';

import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';


class Signup extends React.Component {

  componentDidMount() {
    if (Meteor.userId() !== null) {
      return this.props.history.push('/');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (Meteor.userId() !== null) {
      this.props.history.push('/');
      return false;
    }
    return true;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { username, email, password } = values;
        const profile = {
          availableTime:
            [
              { date: "2020-01-14T15:00", status: 4 },
              { date: "2020-01-14T14:00", status: 4 },
              { date: "2020-01-14T13:00", status: 4 }
            ],
          myEvents: [
            { code: "2020-01-14T15:00", status: 4 }
          ],
          mySubEvents: [],
          mySkills: []
        }
        Accounts.createUser({ username, email, password, profile }, err => {
          if (err) {
            this.setState({ errMsg: err.reason });
            return console.log(err);
          }
        });
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 8,
          offset: 8,
        },
      },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item
          label="Nickname"
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
        </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSignupForm = Form.create({ name: 'register' })(Signup);
export default WrappedSignupForm;
