import React from 'react'
import { Radio } from 'antd';

class Question extends React.Component {

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return <>
            <p>Qustiona vkvnerf?</p>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}></Radio>
                <Radio value={2}></Radio>
                <Radio value={3}></Radio>
                <Radio value={4}></Radio>
            </Radio.Group>
        </>
    }
}

export default Question;