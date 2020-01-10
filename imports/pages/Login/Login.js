import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

// import styles
import './Login.scss';

class Login extends React.Component {

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { email, password } = values;
        Meteor.loginWithPassword(email, password, err => {
          if (err) {
            this.setState({ errMsg: err.reason });
            return console.log(err);
          }
          return this.props.history.push('/')
        });
      }
    });

  }
  render() {
    if (this.props.loggedIn) {
      return null;
    }
    const { getFieldDecorator } = this.props.form;
    return (<Row>
      <Col span={8} offset={9}>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <NavLink to="/signup">register now!</NavLink>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    );
  }
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
