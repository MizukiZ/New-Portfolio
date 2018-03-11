import React from "react"

function Contact({ position }) {
  return (
    <div className="contact-wrap text-center ">
      <div className="contact-subWrap">
        <div className="contact-title">
          <span>C</span>ontact
        </div>
        <div className="sub-title mb-3">Feel free to contact me</div>

        <form method="post" className="contactForm">
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
          />

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your email"
          />
          <textarea
            name="message"
            className="form-control mb-2"
            placeholder="Your message"
            cols={50}
            rows={10}
          />

          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
