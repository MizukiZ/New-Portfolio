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
          Solo/Team projects
        </div>

        <div className="project-items-wrap">
          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/Mottainai">
              <img src="mottainai.jpg" alt="projectImg" />
              <p>
                Two side market place application using{" "}
                <span>Ruby on Rails</span>.
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/major-project-term3">
              <img src="tanto.jpg" alt="projectImg" />
              <p>
                A store management application using <span>React.js</span>{" "}
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

          {/* <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/CaveAdventure">
              <img src="caveAdventure.png" alt="projectImg" />
              <p>
                Android maze game using <span>Unity</span>
              </p>
            </a>
          </div> */}

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/RentMeProject">
              <img src="rentMeImage.jpg" alt="projectImg" />
              <p>
                Renting market android application using{" "}
                <span>Android studio</span>
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/RentMeMVP">
              <img src="ccProject.png" alt="projectImg" />
              <p>
                Currency converter application using{" "}
                <span>React Native and Redux</span>
              </p>
            </a>
          </div>

          <div className="project-item mb-3">
            <a href="https://github.com/MizukiZ/monster_farm_2_tool">
              <img src="MF2ToolImg.png" alt="projectImg" />
              <p>
                Data vizualization tool of my favorite game using{" "}
                <span>Ruby on Rails, Vue.js, Rspec and Docker</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
