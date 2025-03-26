import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
  return (
    <Card
      title=""
      bordered={true}
      style={{
        width: 300,
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <p style={{ fontSize: '16px', color: '#555' }}>{greeting}</p>
    </Card>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
