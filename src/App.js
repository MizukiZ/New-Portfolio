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
    screenHeight: null,
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
      buttonDisable,
      screenHeight
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
        <AboutMe screenHeight={screenHeight} />
        <Skill screenHeight={screenHeight} />
        <Project screenHeight={screenHeight} />
        <Contact screenHeight={screenHeight} />
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

    window.addEventListener(
      "resize",
      e => {
        const screenHeight = window.innerHeight
        this.setState({ screenHeight })
      },
      true
    )

    const bodyRect = document.body.getBoundingClientRect()
    const aboutTop = Math.floor(
      document.querySelector(".about-wrap").getBoundingClientRect().top -
        bodyRect.top
    )
    const skillTop = Math.floor(
      document.querySelector(".skill-wrap").getBoundingClientRect().top -
        bodyRect.top
    )
    const projectTop = Math.floor(
      document.querySelector(".project-wrap").getBoundingClientRect().top -
        bodyRect.top
    )
    const contactTop = Math.floor(
      document.querySelector(".contact-wrap").getBoundingClientRect().top -
        bodyRect.top
    )

    this.setState({ aboutTop, skillTop, projectTop, contactTop })
  }
}

export default App
