import React, { Component } from 'react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

class ViewTaskTopMenuDropdown extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='Menu'
            selection
            value={value}
          />
        </Grid.Column>
      </Grid>
    )
  }
}


export default ViewTaskTopMenuDropdown;
