import React from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Message extends React.Component {

    render() {
        const { time, text } = this.props.message;
        return (<Comment
            author={<a>Han Solo</a>}
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
            datetime={
                <Tooltip title={moment(time).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />)
    }
}

export default Message;