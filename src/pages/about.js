import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Welcome to Cantertrot Swimming</h2>
            <p>
              Serving Houston with years of experience in the swimming industry,
              we are here to help anyone at any skill level learn the
              fundamentals of swimming. We offer a variety of classes for all
              ages and skill levels. We also offer private lessons for those who
              want to learn at their own pace.
            </p>
            <p>
              Cantertrot Swimming has its own pool and a team of highly trained
              instructors, we are here to help you reach your swimming goals.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Cantertrot Swimming"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
