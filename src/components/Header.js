import React from "react"
import jump from "jump.js"

function onClickJump(place) {
  jump(`.${place}-wrap`, { offset: -50 })
}

function activeSection(
  position,
  aboutTop,
  skillTop,
  projectTop,
  contactTop,
  section
) {
  if (position < skillTop && section === "about") {
    return "active-color"
  } else if (
    position > skillTop &&
    position < projectTop &&
    section === "skill"
  ) {
    return "active-color"
  } else if (
    position > projectTop &&
    position < contactTop &&
    section === "project"
  ) {
    return "active-color"
  } else if (position > contactTop && section === "contact") {
    return "active-color"
  }
}

function Header({ position, aboutTop, skillTop, projectTop, contactTop }) {
  return (
    <nav className="navbar navbar-expand-sm sticky-top my-header">
      <a className="navbar-brand" href="#">
        <img
          src="/placeholder.png"
          alt="profileImage"
          style={{ width: "55px" }}
        />
      </a>

      <div className="section">
        <p
          className={`section-item ${activeSection(
            position,
            aboutTop,
            skillTop,
            projectTop,
            contactTop,
            "about"
          )}`}
          onClick={e => {
            onClickJump("about")
          }}
        >
          About me
        </p>
        <p
          className={`section-item ${activeSection(
            position,
            aboutTop,
            skillTop,
            projectTop,
            contactTop,
            "skill"
          )}`}
          onClick={e => {
            onClickJump("skill")
          }}
        >
          Skills
        </p>
        <p
          className={`section-item ${activeSection(
            position,
            aboutTop,
            skillTop,
            projectTop,
            contactTop,
            "project"
          )}`}
          onClick={e => {
            onClickJump("project")
          }}
        >
          Project
        </p>
        <p
          className={`section-item ${activeSection(
            position,
            aboutTop,
            skillTop,
            projectTop,
            contactTop,
            "contact"
          )}`}
          onClick={e => {
            onClickJump("contact")
          }}
        >
          Contact
        </p>
      </div>
    </nav>
  )
}

export default Header
