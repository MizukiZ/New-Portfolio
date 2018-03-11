import React from "react"

function Contact({ position }) {
  return (
    <div className="contact-wrap text-center ">
      <div className="contact-subWrap">
        <div className="contact-title mb-3">
          <span>C</span>ontact
        </div>

        <form name="contactform" method="POST" data-netlify="true">
          <div className="contact_form">
            <div id="your">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="form-control"
              />
              <input
                type="text"
                name="email"
                placeholder="Your email address"
                className="form-control"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                className="form-control"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              className="form-control mb-2"
              rows="8"
              cols="50"
            />

            <div id="submit">
              <input
                id="submit_button"
                type="submit"
                name="submit"
                value="Send"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
