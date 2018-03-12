import React from "react"

function Skill({ screenHeight }) {
  // skills list
  const mySkills = {
    javaScript: ["JavaScript", "Node", "Express", "React"],
    ruby: ["Ruby", "Ruby on Rails"],
    html: ["HTML", "CSS", "Bootstrap"],
    dataBase: ["SQL", "NoSQL", "MongoDB", "PortgreSQL"],
    internship: ["WordPress", "PHP"]
  }
  return (
    <div
      className="skill-wrap text-center"
      // when screen height is changed, change the size of wrapper element
      style={{ minHeight: screenHeight - 50 }}
    >
      <div className="skill-subWtap">
        <div className="skill-title">
          <span>S</span>kills
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
