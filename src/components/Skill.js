import React from "react"

function Skill({ screenHeight, headerOffSet }) {
  // skills list
  const mySkills = {
    javaScript: ["JavaScript", "Jquery", "Node", "Express", "React", "React Native", "Angular"],
    ruby: ["Ruby", "Ruby on Rails"],
    html: ["HTML", "CSS", "Bootstrap"],
    dataBase: ["MySQL", "MongoDB", "PortgreSQL", "Firebase"],
    internship: ["WordPress", "PHP"],
    AIT: ["JAVA", "C#", "Objective-C", "Unity", "Android studio", "Xcode", "ASP.NET", "Ionic"]
  }
  return (
    <div
      className="skill-wrap text-center"
      // when screen height is changed, change the size of wrapper element
      style={{ minHeight: screenHeight - headerOffSet }}
    >
      <div className="skill-subWrap">
        <div className="skill-title">
          <span>S</span>
          kills
        </div>

        <div className="sub-title mb-3">Programming languages, tools</div>

        <div className="skill-items">
          {/* generate skills item based on the item list above */}
          {Object.keys(mySkills).map(key => {
            return (
              <div className="skill-itmes-row mb-1" key={`${key}-row`}>
                {mySkills[key].map((skill, i) => {
                  return (
                    <div className="skill-item mr-2" key={`${key}-item-${i}`}>
                      {skill}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skill
