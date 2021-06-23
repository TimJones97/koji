import React, { Component } from "react"
import Socials from '../components/socials'
import SEO from '../components/seo'
import Layout from '../components/layout'

class Contact extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Contact"/>
          <section className="contact normal-section contact-page light-nav brown-nav">
            <div className="container">
              <div className="left">
                <div className="split-mobile">
                  <header>
                    <span className="subheading">CONTACT</span>
                    <h1>
                      Get in touch.
                    </h1>
                  </header>
                  <Socials/>
                </div>
                <div className="split-mobile help">
                  <p>
                    Please complete the form below to get in contact with someone from our team. Alternatively, reach out directly on telegram <a href="#empty">@koji_capital</a>
                  </p>
                </div>
              </div>
              <div className="right">
                <p className="help-text">
                  Please complete the form below to get in contact with someone from our team. Alternatively, reach out directly on telegram <a href="#empty">@koji_capital</a>
                </p>
                <form className="contact-form" action="https://formspree.io/f/mrgrprod" method="POST">
                  <div className="form-item half">
                    <label htmlFor="First name">FIRST NAME</label>
                    <input placeholder="First name" name="first_name" type="text" required />
                  </div>
                  <div className="form-item half">
                    <label htmlFor="Last name">LAST NAME</label>
                    <input placeholder="Last name" name="last_name" type="text" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="Company name">COMPANY</label>
                    <input placeholder="Company name" name="company" type="text" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="Email address">EMAIL</label>
                    <input placeholder="Email address" name="email" type="email" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="Subject">SUBJECT</label>
                    <input placeholder="Write your subject line here..." name="subject" type="text" required />
                  </div>
                  <div className="form-item">
                    <label htmlFor="Message">MESSAGE</label>
                    <textarea placeholder="Write your message here..." name="message" type="text" required defaultValue={""} />
                  </div>
                  <button type="submit">SEND</button>
                </form>
                <Socials mobileSml/>
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default Contact;