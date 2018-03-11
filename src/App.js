import React, { Component } from "react"
import "./App.css"

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Contact from "./components/Contact"

// add bootstrap
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  state = {
    position: 0,
    aboutTop: null,
    skillTop: null,
    projectTop: null,
    contactTop: null,
    buttonDisable: false
  }

  buttonDisableToggle = () => {
    this.setState({ buttonDisable: true }, () => {
      setTimeout(() => {
        this.setState({ buttonDisable: false })
      }, 1500)
    })
  }

  render() {
    const {
      position,
      aboutTop,
      skillTop,
      projectTop,
      contactTop,
      buttonDisable
    } = this.state
    return (
      <div className="App">
        <Header
          position={position}
          aboutTop={aboutTop}
          skillTop={skillTop}
          projectTop={projectTop}
          contactTop={contactTop}
          onButtonDisable={this.buttonDisableToggle}
          buttonDisable={buttonDisable}
        />
        <AboutMe />
        <Skill />
        <Project />
        <Contact />
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      e => {
        const yPosition = window.pageYOffset
        this.setState({ position: yPosition })
      },
      true
    )

    const bodyRect = document.body.getBoundingClientRect()
    const aboutTop =
      document.querySelector(".about-wrap").getBoundingClientRect().top -
      bodyRect.top
    const skillTop =
      document.querySelector(".skill-wrap").getBoundingClientRect().top -
      bodyRect.top
    const projectTop =
      document.querySelector(".project-wrap").getBoundingClientRect().top -
      bodyRect.top
    const contactTop =
      document.querySelector(".contact-wrap").getBoundingClientRect().top -
      bodyRect.top

    this.setState({ aboutTop, skillTop, projectTop, contactTop })
  }
}

export default App
