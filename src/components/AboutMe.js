import React from "react"

function AboutMe({ position, screenHeight, headerOffSet }) {
  return (
    <div
      className="about-wrap text-center "
      // when screen height is changed, change the size of wrapper element
      style={{ minHeight: screenHeight - headerOffSet }}
    >
      <div className="about-subWrap" style={{ maxWidth: 800 }}>
        <div className="about-title">
          <span>Mizuki</span> Zenta
        </div>

        <div className="sub-title mb-3">
          Experience: <span>Internship</span> at IoT company called Mystic Pants
        </div>

        <div className="about-main mb-3">
          Hi ,I am from Japan. I majored in environmental science in University.
          Afterwards, I worked for a building air conditioner company as a field
          engineer for 3 years. Now I am in Australia to start my 2nd career as
          a developer. I have finished diploma of IT at Coder Academy and
          currently studying at AIT bachelor of IT(mobile apps) in Melbourne.
        </div>

        <div className="icons-section mb-2">
          <a href="/devResume.docx">
            <img src="resume.png" alt="resumeLogo" />
            Resume
          </a>
          <a href="https://www.linkedin.com/in/mizuki-zenta-6684a2154/">
            <img src="linkedin.png" alt="linkedInLogo" />
            LinkedIn
          </a>
          <a href="https://github.com/MizukiZ">
            <img src="github.png" alt="gitLogo" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
