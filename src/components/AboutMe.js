import React from "react"

function AboutMe() {
  return (
    <div className="about-wrap text-center m-2">
      <div className="about-title">
        <span>Mizuki</span> Zenta
      </div>

      <div className="sub-title mb-2">
        Passion: <span>Coding</span>, Borad Sports
      </div>

      <div className="about-main mb-2">
        Hi ,I am from Japan. I majored in environmental science in University.
        Afterwards, I worked for a building air conditioner company as a field
        engineer for 3 years. Now I am in Australia to start my 2nd career as a
        developer and currently studying at AIT bachelor of IT(mobile apps) in
        Melbourne.
      </div>

      <div className="icons-section mb-2">
        <a
          href="https://github.com/MizukiZ"
          style={{ marginRight: "20px" }}
          target="_blank"
        >
          <img src="github.png" height="25px" width="25px" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mizuki-zenta-6684a2154/"
          target="_blank"
        >
          <img src="linkedin.png" height="25px" width="25px" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default AboutMe
