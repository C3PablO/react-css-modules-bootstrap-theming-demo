import React from 'react';

// styles
import styles from '../style/modules/powers_list.scss'

// components
import Col from 'react-bootstrap/lib/Col';
import Power from './power';

const PowersList = (props) => {
  const items = props.options.map((option, key) => {
    return <Power key={key} featured={option.featured}>{option.label}</Power>
  });

  return (
    <Col className={styles.wrapper} md={4} mdOffset={4}>
      <h2>Your Hero</h2>
      <div className={styles.content}>
        {items}
        {(items.length === 0) ? 'No Powers. Give your hero some skills' : ''}
      </div>
    </Col>
  )
}

export default PowersList;
