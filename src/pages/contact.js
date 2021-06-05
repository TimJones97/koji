/* eslint-disable */
import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const Investments = () => {
  return (
    <>
      <Header overflow="true"/>
      <Navbar background="light brown-bg"/>
      <section className="contact contact-page">
        <div className="container">
          <div className="left">
            <header>
              <span className="subheading">CONTACT</span>
              <h1>
                Get in touch.
              </h1>
            </header>
            <div className="socials">
              <p className="title">SOCIALS</p>
              <a href="#">AngelList</a>
              <a href="#">LinkedIn</a>
              <a href="#">Telegram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="right">
            <p>
              Please complete the form below to get in contact with someone from our team. Alternatively, reach out directly on telegram <a href="#">@koji_capital</a>
            </p>
            <form className="contact-form" action="https://formspree.io/f/mrgrprod" method="POST">
              <div className="form-item half">
                <label>FIRST NAME</label>
                <input placeholder="First name" name="first_name" type="text" required />
              </div>
              <div className="form-item half">
                <label>LAST NAME</label>
                <input placeholder="Last name" name="last_name" type="text" required />
              </div>
              <div className="form-item">
                <label>COMPANY</label>
                <input placeholder="Company name" name="company" type="text" required />
              </div>
              <div className="form-item">
                <label>EMAIL</label>
                <input placeholder="Email address" name="email" type="email" required />
              </div>
              <div className="form-item">
                <label>SUBJECT</label>
                <input placeholder="Write your subject line here..." name="subject" type="text" required />
              </div>
              <div className="form-item">
                <label>SUBJECT</label>
                <textarea placeholder="Write your message here..." name="subject" type="text" required defaultValue={""} />
              </div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
      <Scripts/>
    </>
  )
}

export default Investments;