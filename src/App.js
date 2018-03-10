import React, { Component } from "react"
import "./App.css"

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"

// add bootstrap
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <hr />
      </div>
    )
  }
}

export default App
