import React from 'react';
import ItemCard from './components/ItemCard';
import { Row } from 'antd';

export const SubEvent = new Mongo.Collection('SubEvent');

class SubEvents extends React.Component {

  render() {
    const subEvent = SubEvent.find({}).fetch();
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={24}>
          {
            subEvent.map(item => <ItemCard key={item._id} {...item} />)
          }
        </Row>
      </div >
    )

  }
}

export default SubEvents;
