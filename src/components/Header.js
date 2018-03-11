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
  if (position < skillTop - 50 && section === "about") {
    return "active-color"
  } else if (
    position >= skillTop - 50 &&
    position < projectTop - 50 &&
    section === "skill"
  ) {
    return "active-color"
  } else if (
    position >= projectTop - 50 &&
    position < contactTop - 52 &&
    section === "project"
  ) {
    return "active-color"
  } else if (position > contactTop - 52 && section === "contact") {
    return "active-color"
  }
}

function Header({
  position,
  aboutTop,
  skillTop,
  projectTop,
  contactTop,
  onButtonDisable,
  buttonDisable
}) {
  return (
    <div className="sticky-top my-header">
      <div>
        <img
          src="/mizuki.JPG"
          alt="profileImage"
          className="rounded-circle myImage"
        />
      </div>

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
            if (!buttonDisable) {
              onClickJump("about")
              onButtonDisable()
            }
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
            if (!buttonDisable) {
              onClickJump("skill")
              onButtonDisable()
            }
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
            if (!buttonDisable) {
              onClickJump("project")
              onButtonDisable()
            }
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
            if (!buttonDisable) {
              onClickJump("contact")
              onButtonDisable()
            }
          }}
        >
          Contact
        </p>
      </div>
    </div>
  )
}

export default Header
