import React from "react"

function AboutMe({ position }) {
  return (
    <div className="about-wrap text-center ">
      <div className="about-subWrap">
        <div className="about-title">
          <span>Mizuki</span> Zenta
        </div>

        <div className="sub-title mb-3">
          Passion: <span>Coding</span>, Borad Sports
        </div>

        <div className="about-main mb-2">
          Hi ,I am from Japan. I majored in environmental science in University.
          Afterwards, I worked for a building air conditioner company as a field
          engineer for 3 years. Now I am in Australia to start my 2nd career as
          a developer and currently studying at AIT bachelor of IT(mobile apps)
          in Melbourne.
        </div>

        <div className="icons-section mb-2">
          <a href="https://github.com/MizukiZ" style={{ marginRight: "30px" }}>
            <img src="github.png" alt="gitLogo" height="25px" width="25px" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mizuki-zenta-6684a2154/">
            <img
              src="linkedin.png"
              alt="linkedInLogo"
              height="25px"
              width="25px"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
