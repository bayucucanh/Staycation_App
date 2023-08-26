import { Headers } from 'parts'
import React, { Component } from 'react'

export default class LandingPage extends Component {
  constructor(props) {
    super();
}
  render () {
    return (
      <>
        <Headers {...this.props}></Headers>
      </>
    )
  }
}