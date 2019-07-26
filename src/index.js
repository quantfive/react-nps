import React, {Component} from 'react'

import NPSInput from './NPSInput';

export default class extends Component {
  render() {
    return (
      <NPSInput 
        {...this.props}
      />
    )
  }
}
