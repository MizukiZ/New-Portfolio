import React from "react"

function Header() {
  return (
    <nav className="navbar navbar-expand-sm sticky-top my-header">
      <a className="navbar-brand" href="#">
        <img
          src="/placeholder.png"
          alt="profileImage"
          style={{ width: "55px" }}
        />
      </a>

      <div className="section">
        <p className="section-item active-color">About me</p>
        <p className="section-item">Skills</p>
        <p className="section-item">Project</p>
        <p className="section-item">Contact</p>
      </div>
    </nav>
  )
}

export default Header
