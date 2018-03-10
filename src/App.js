import React, { Component } from "react"
import "./App.css"

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skill from "./components/Skill"

// add bootstrap
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <hr className="mt-3" />
        <Skill />
        <hr className="mt-3" />
      </div>
    )
  }
}

export default App
