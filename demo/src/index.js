import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  onSubmit = (score) => {
    console.log(score);
  }
  render() {
    return <div>
      <h1>react-nps Demo</h1>
      <Example
        onSubmit={this.onSubmit}
        score={5}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
