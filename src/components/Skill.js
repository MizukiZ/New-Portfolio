import React from "react"

function Skill() {
  const mySkills = {
    javaScript: ["JavaScript", "Node", "Express", "React"],
    ruby: ["Ruby", "Ruby on Rails"],
    html: ["HTML", "CSS", "Bootstrap"],
    dataBase: ["SQL", "NoSQL", "MongoDB", "PortgreSQL"],
    internship: ["WordPress", "PHP"]
  }
  return (
    <div className="skill-wrap text-center m-2">
      <div className="skill-subWtap">
        <div className="skill-title">
          <span>S</span>kills
        </div>
        <div className="sub-title mb-3">Programming languages, tools</div>
        <div className="skill-items">
          {Object.keys(mySkills).map(key => {
            return (
              <div className="skill-itmes-row mb-1">
                {mySkills[key].map((skill, i) => {
                  return <div className="skill-item mr-2">{skill}</div>
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
