import React from "react"

function Project() {
  return (
    <div className="project-wrap">
      <div className="project-title">
        <span>P</span>rojects
      </div>
      <div className="sub-title mb-3">
        Solo/Team projects I have done so far
      </div>

      <div className="project-items-wrap">
        <div className="project-item mb-3">
          <a href="https://github.com/MizukiZ/Mottainai">
            <img src="placeholder.png" alt="projectImg" />
          </a>
          <p>
            Two side market place application built on{" "}
            <span>Ruby on Rails</span>.
          </p>
        </div>

        <div className="project-item mb-3">
          <a href="https://github.com/MizukiZ/major-project-term3">
            <img src="placeholder.png" alt="projectImg" />
          </a>
          <p>
            A store management application build on <span>React.js</span> for a
            real client (a knife shop)
            <span />
          </p>
        </div>

        <div className="project-item mb-3">
          <a href="https://github.com/MizukiZ/cm-template">
            <img src="placeholder.png" alt="projectImg" />
          </a>
          <p>
            <span>WordPress plugin</span> application for an environment monitor
            device
            <span />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
