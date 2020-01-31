import React from 'react'
import { Comment, Avatar } from 'antd';
import moment from 'moment';

class Message extends React.Component {

    render() {
        const { time, text, author } = this.props.message;
        return (<Comment
            author={<a>{author}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    {text}
                </p>
            }
            datetime={<span>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</span>}
        />)
    }
}

export default Message;