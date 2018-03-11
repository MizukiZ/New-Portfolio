import React from "react"

function Contact({ position }) {
  return (
    <div className="contact-wrap text-center ">
      <div className="contact-subWrap">
        <div className="contact-title mb-3">
          <span>C</span>ontact
        </div>

        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Contact
