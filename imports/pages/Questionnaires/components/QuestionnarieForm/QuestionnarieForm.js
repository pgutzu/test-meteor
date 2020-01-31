import React from 'react';
import { Form, message, Button, Result } from 'antd'
import FieldByType from '../FieldByType';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const question = [
    {
        id: 1,
        label: 'How do you like Kiiver?',
        nameField: 'kiiver'
    },
    {
        id: 2,
        label: 'What exactly did you like?',
        nameField: 'exactly'
    },
    {
        id: 3,
        label: 'Want to know more about Kiiver?',
        nameField: 'knowMore'
    },
    {
        id: 4,
        label: 'Want to know more about Kiiver?',
        nameField: 'knowMore1'
    },
    {
        id: 5,
        label: 'Want to know more about Kiiver?',
        nameField: 'knowMore2'
    },
    {
        id: 6,
        label: 'Want to know more about Kiiver?',
        nameField: 'knowMore3'
    },
    {
        id: 7,
        label: 'Want to know more about Kiiver?',
        nameField: 'knowMore4'
    }
]

class QuestionnarieForm extends React.Component {

    state = {
        complete: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                let data = {
                    idAnswering: Meteor.userId(),
                    nameAnswering: Meteor.users.find({ _id: Meteor.userId() }).fetch()[0].username,
                    values: values
                };

                Meteor.call('answerQuestionarie', data);
                message.success('Your answer is set off');
                this.setState(state => ({ complete: !state.complete }))
            }
        });
    }

    render() {
        return <>
            {
                !this.state.complete ?
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        {
                            question.map(item => <FieldByType key={item.id} {...this.props} {...item} />)
                        }
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Reply
                </Button>
                        </Form.Item>
                    </Form>
                    :
                    < Result
                        status="success"
                        title="Reply sent successfully"
                    />
            }

        </>
    }
}
const WrappedQuestionnarieForm = Form.create({ name: 'questionnarie' })(QuestionnarieForm)
export default WrappedQuestionnarieForm;