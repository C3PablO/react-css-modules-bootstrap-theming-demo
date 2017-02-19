import React from 'react';

//styles
import styles from '../style/modules/powers_list.scss'

// components
import Button from 'react-bootstrap/lib/Button';

const Power = (props) => {
  const className = (props.featured) ? styles.item_featured : styles.item;
  return (
    <Button className={className} bsStyle="primary" block>{props.children}</Button>
  )
}

export default Power;
