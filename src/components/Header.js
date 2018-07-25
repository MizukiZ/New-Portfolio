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

function colorSet(
  position,
  aboutTop,
  skillTop,
  projectTop,
  contactTop,
  headerHeight
) {
  if (position < skillTop - headerHeight) {
    return "#6fcf97"
  } else if (
    position >= skillTop - headerHeight &&
    position < projectTop - headerHeight
  ) {
    return "#0567eb"
  } else if (
    position >= projectTop - headerHeight &&
    position < contactTop - headerHeight - 2
  ) {
    return "#f2994a"
  } else if (position > contactTop - headerHeight - 2) {
    return "#f2c94c"
  }
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
    <div
      className="sticky-top my-header"
      style={{
        backgroundColor: colorSet(
          position,
          aboutTop,
          skillTop,
          projectTop,
          contactTop,
          headerOffSet
        )
      }}
    >
      <div>
        <img
          src="/profilePic.jpg"
          alt="profileImage"
          className="rounded-circle myImage"
          style={{
            borderColor: colorSet(
              position,
              aboutTop,
              skillTop,
              projectTop,
              contactTop,
              headerOffSet
            )
          }}
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
