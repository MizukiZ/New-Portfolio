import React from "react"
import jump from "jump.js"

function onClickJump(place) {
  jump(`.${place}-wrap`, { offset: -50 })
}

// section items list
const sectionObject = {
  about: "About me",
  skill: "Skills",
  project: "Project",
  contact: "Contact"
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
        {/* generate items buttons based on the sectionOject above */}
        {Object.keys(sectionObject).map(section => {
          return (
            <p
              className={`section-item ${activeSection(
                position,
                aboutTop,
                skillTop,
                projectTop,
                contactTop,
                section
              )}`}
              key={`header-${section}`}
              onClick={e => {
                if (!buttonDisable) {
                  onClickJump(section)
                  onButtonDisable()
                }
              }}
            >
              {sectionObject[section]}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Header
