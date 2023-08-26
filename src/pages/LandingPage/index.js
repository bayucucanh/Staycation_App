import { Headers, Hero, MostPicked } from 'parts'
import React, { Component } from 'react'
import landingPage from "../../json/landingPage.json"

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef()
}
  render () {
    return (
      <>
        <Headers {...this.props}></Headers>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
      </>
    )
  }
}