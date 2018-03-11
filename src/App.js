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
    contactTop: null
  }

  render() {
    const { position, aboutTop, skillTop, projectTop, contactTop } = this.state
    return (
      <div className="App">
        <Header
          position={position}
          aboutTop={aboutTop}
          skillTop={skillTop}
          projectTop={projectTop}
          contactTop={contactTop}
        />
        <AboutMe />
        <hr className="mt-3" />
        <Skill />
        <hr className="mt-3" />
        <Project />
        <hr className="mt-3" />
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
      bodyRect.top -
      50
    const skillTop =
      document.querySelector(".skill-wrap").getBoundingClientRect().top -
      bodyRect.top -
      50
    const projectTop =
      document.querySelector(".project-wrap").getBoundingClientRect().top -
      bodyRect.top -
      50
    const contactTop =
      document.querySelector(".contact-wrap").getBoundingClientRect().top -
      bodyRect.top -
      50

    this.setState({ aboutTop, skillTop, projectTop, contactTop })
  }
}

export default App
