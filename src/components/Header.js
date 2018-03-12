import React from "react"
import jump from "jump.js"

function onClickJump(place, headerHeight) {
  jump(`.${place}-wrap`, { offset: -headerHeight })
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
  section,
  headerHeight
) {
  if (position < skillTop - headerHeight && section === "about") {
    return "active-color"
  } else if (
    position >= skillTop - headerHeight &&
    position < projectTop - headerHeight &&
    section === "skill"
  ) {
    return "active-color"
  } else if (
    position >= projectTop - headerHeight &&
    position < contactTop - headerHeight - 2 &&
    section === "project"
  ) {
    return "active-color"
  } else if (
    position > contactTop - headerHeight - 2 &&
    section === "contact"
  ) {
    return "active-color"
  }
}

function Header({
  position,
  headerOffSet,
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
          src="/profilePic.jpg"
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
                section,
                headerOffSet
              )}`}
              key={`header-${section}`}
              onClick={e => {
                if (!buttonDisable) {
                  onClickJump(section, headerOffSet)
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
