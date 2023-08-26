import { Headers, Hero } from 'parts'
import React, { Component } from 'react'
import landingPage from "../../json/landingPage.json"

export default class LandingPage extends Component {
  constructor(props) {
    super();
}
  render () {
    return (
      <>
        <Headers {...this.props}></Headers>
        <Hero data={landingPage.hero} />
      </>
    )
  }
}