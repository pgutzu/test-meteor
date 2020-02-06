import React from 'react';
import { Row, Tag, Collapse, Button } from 'antd';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
const { CheckableTag } = Tag;
const { Panel } = Collapse;
const tagsFromServer = [
    { title: 'Programming', tags: ['React', 'JavaScript', 'Java', 'Python', 'Blockchain'] },
    { title: 'Marketing', tags: ['Marketing Strategy', 'Content Marketing', 'Digital Marketing', 'Growth Strategy', 'Campaign Planning'] },
    { title: 'Software Development', tags: ['Mobile App Development', 'Agile Development', 'Web Applications'] }
];

class InterestingSkills extends TrackerReact(React.Component) {
    state = {
        selectedTags: [],
    };

    handleChange = (tag, checked) => {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        let oldDataProfile = Meteor.users.findOne({ _id: Meteor.userId() }).profile;
        oldDataProfile.interesting = nextSelectedTags;
        Meteor.users.update({ _id: Meteor.userId() }, {
            $set: {
                profile: { ...oldDataProfile }
            }
        });
        this.setState({ selectedTags: nextSelectedTags });
    }

    finaly = () => this.props.history.push('/users');
    render() {
        const { selectedTags } = this.state;
        return (
            <>
                <div>
                    <h1>Then, what you <span style={{ color: "red" }}>seek</span> from other attendees</h1>
                    <p>Our algorithm uses your interests to match you witch the right people.</p>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Collapse defaultActiveKey={['0']}>
                            {tagsFromServer.map((tag, index) => (
                                <Panel header={tag.title} key={index}>
                                    {
                                        tag.tags.map((item) => (
                                            <CheckableTag
                                                color="green"
                                                key={item}
                                                checked={selectedTags.indexOf(item) > -1}
                                                onChange={checked => this.handleChange(item, checked)}
                                            >
                                                {item}
                                            </CheckableTag>
                                        ))
                                    }
                                </Panel>
                            ))}
                        </Collapse>
                        {
                            !this.props.admin &&
                            <Button type="primary" onClick={() => this.finaly()}>Final</Button>
                        }
                    </Row>
                </div>
            </>
        )
    }
}
export default InterestingSkills;