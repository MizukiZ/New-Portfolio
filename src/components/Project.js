import React from "react"

function Project({ screenHeight, headerOffSet }) {
  return (
    <div
      className="project-wrap"
      // when screen height is changed, change the size of wrapper element
      style={{ minHeight: screenHeight - headerOffSet }}
    >
      <div className="project-subWrap">
        <div className="project-title">
          <span>P</span>
          rojects
        </div>

        <div className="sub-title mb-3">
          Solo/Team projects I have done so far
        </div>

        <div className="project-items-wrap">
          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/Mottainai">
              <img src="mottainai.jpg" alt="projectImg" />
              <p>
                Two side market place application built on{" "}
                <span>Ruby on Rails</span>.
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/major-project-term3">
              <img src="tanto.jpg" alt="projectImg" />
              <p>
                A store management application build on <span>React.js</span>{" "}
                for a real client (a knife shop)
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/cm-template">
              <img src="cmTemplate.jpg" alt="projectImg" />
              <p>
                <span>WordPress plugin</span> application for an environment
                monitor device
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/CaveAdventure">
              <img src="caveAdventure.png" alt="projectImg" />
              <p>
                Android maze game Build on <span>Unity</span>
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/RentMeProject">
              <img src="rentMeImage.jpg" alt="projectImg" />
              <p>
                Renting market android application Build on{" "}
                <span>Android studio</span>
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/RentMeMVP">
              <img src="ccProject.png" alt="projectImg" />
              <p>
                Currency converter application Build on{" "}
                <span>React Native</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
