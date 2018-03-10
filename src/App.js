import React, { Component } from "react"
import "./App.css"

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skill from "./components/Skill"
import Project from "./components/Project"

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
        <Project />
        <hr className="mt-3" />
      </div>
    )
  }
}

export default App
