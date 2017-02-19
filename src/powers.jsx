import React from 'react';

//styles
import styles from '../style/modules/powers.scss'

//components
import Select from 'react-select';
import Col from 'react-bootstrap/lib/Col';

const Powers = (props) => {
  return (
    <Col className={styles.wrapper} md={4}>
      <h2>{props.title} Powers</h2>
      <div className={styles.content}>
        <Select options={props.options} onChange={props.onChange} value={props.value} multi />
      </div>
    </Col>
  )
}

export default Powers;
