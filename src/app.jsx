import React, { Component } from 'react';
import { sortByLabel } from './utils';

//styles
import '../style/core/core.scss';
import styles from '../style/modules/app.scss';

// components
import Grid from 'react-bootstrap/lib/Grid';
import Powers from './powers';
import PowersList from './powers_list';
import Power from './power';

//data
import { traditionalOptions, sillyOptions, coolOptions } from './data.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { traditional: [], silly: [], cool: [] };
  }

  render() {
    const { traditional, silly, cool } = this.state;
    return (
      <Grid className={styles.app} fluid>
        <h1>Hero Builder</h1>
        <Powers
          title="Traditional"
          options={traditionalOptions}
          onChange={(value) => this.setState({ traditional: value})}
          value={this.state.traditional}
        />
        <Powers
          title="Silly"
          options={sillyOptions}
          onChange={(value) => this.setState({ silly: value})}
          value={this.state.silly}
        />
        <Powers
          title="Cool"
          options={coolOptions}
          onChange={(value) => this.setState({ cool: value})}
          value={this.state.cool}
        />
        <PowersList options={[...traditional, ...silly, ...cool].sort(sortByLabel)} />
      </Grid>
    );
  }
}

export default App;
