import React from 'react';

//styles
 import styles from '../style/modules/field_chooser.scss'

// components
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

const onChange = (e) => {
  const name = e.target.files[0].name;
  document.getElementById("pagestyle").setAttribute("href", `./${name}`);
  document.body.id = name.split(".css")[0];
}

const ThemeChooser = (props) => {
  return (
    <FormGroup controlId="name" className={styles.field}>
      <FormControl type="file" onChange={onChange}/>
      <HelpBlock>Select a theme file from the static folder</HelpBlock>
    </FormGroup>
  );
}

export default ThemeChooser;
