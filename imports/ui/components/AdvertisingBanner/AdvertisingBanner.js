import React from 'react';
import { Card } from 'antd'
const { Meta } = Card;

const AdvertisingBanner = ({ title, link, upload }) => (
  <Card
    hoverable
    style={{ marginTop: 100 }}
    cover={<img alt="example" src={upload[0].thumbUrl} />}
  >
    <Meta title={title} description={link} />
  </Card>
);

export default AdvertisingBanner;
