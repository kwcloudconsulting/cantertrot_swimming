import React from "react";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <div>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3>Get in touch with us</h3>
              <p>
                Here at Cantertrot Swimming we take your feedback seriously. If
                you have questions, concerns or just want to shoot us a hello,
                we would love to hear from you.
              </p>
            </article>
            <article>
              <form className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Your Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Your Message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default contact;
