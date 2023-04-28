import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/pool.jpg"
            alt="Cantertrot Swimming Pool"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Cantertrot Swimming</h1>
              <h4>Learn to swim with us in our beautiful pool in Houston</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
