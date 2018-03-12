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
    headerOffSet: null,
    aboutTop: null,
    skillTop: null,
    projectTop: null,
    contactTop: null,
    buttonDisable: false
  }

  // desable the buttons for 1s(prevention for mashing buttons)
  buttonDisableToggle = () => {
    this.setState({ buttonDisable: true }, () => {
      setTimeout(() => {
        this.setState({ buttonDisable: false })
      }, 1000)
    })
  }

  render() {
    const {
      position,
      aboutTop,
      headerOffSet,
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
          headerOffSet={headerOffSet}
          aboutTop={aboutTop}
          skillTop={skillTop}
          projectTop={projectTop}
          contactTop={contactTop}
          onButtonDisable={this.buttonDisableToggle}
          buttonDisable={buttonDisable}
        />
        <AboutMe screenHeight={screenHeight} headerOffSet={headerOffSet} />
        <Skill screenHeight={screenHeight} headerOffSet={headerOffSet} />
        <Project screenHeight={screenHeight} headerOffSet={headerOffSet} />
        <Contact screenHeight={screenHeight} headerOffSet={headerOffSet} />
      </div>
    )
  }

  componentDidMount() {
    // get header offset
    const headerOffSet = document.querySelector(`.my-header`).offsetHeight
    // get screen height
    const screenHeight = window.innerHeight
    this.setState({ screenHeight, headerOffSet }, () => {
      // detect the postions of each section
      const bodyRect = document.body.getBoundingClientRect()
      const sectionArray = ["about", "skill", "project", "contact"]

      sectionArray.forEach(section => {
        const target = document.querySelector(`.${section}-wrap`)
        this.setState({
          [`${section}Top`]: Math.floor(
            target.getBoundingClientRect().top - bodyRect.top
          )
        })
      })
    })

    // add event for window to detect scroll
    // window.addEventListener(
    //   "scroll",
    //   e => {
    //     // get scroll amount
    //     const yPosition = window.pageYOffset
    //     this.setState({ position: Math.ceil(yPosition) })
    //   },
    //   true
    // )

    // add event for window to detect size change(screen height)
    window.addEventListener(
      "resize",
      e => {
        // get header offset
        const headerOffSet = document.querySelector(`.my-header`).offsetHeight
        // get screen height
        const screenHeight = window.innerHeight
        this.setState({ screenHeight, headerOffSet }, () => {
          // detect the postions of each section
          const bodyRect = document.body.getBoundingClientRect()
          const sectionArray = ["about", "skill", "project", "contact"]

          sectionArray.forEach(section => {
            const target = document.querySelector(`.${section}-wrap`)
            this.setState({
              [`${section}Top`]: Math.floor(
                target.getBoundingClientRect().top - bodyRect.top
              )
            })
          })
        })
      },
      true
    )
  }
}

export default App
