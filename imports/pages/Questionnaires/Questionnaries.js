import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import QuestionnarieForm from './components/QuestionnarieForm';

class Questionnaries extends TrackerReact(React.Component) {

    render() {
        return <QuestionnarieForm />
    }
}

export default Questionnaries;