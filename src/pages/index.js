import * as React from "react";
import Layout from "../components/Layout";
//import { StaticImage } from "gatsby-plugin-image";
import BackgroundSlider from "gatsby-image-background-slider";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = ({ children }) => {
  const backgrounds = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const bgWrappers = backgrounds.backgrounds.nodes.map((node) => ({
    childImageSharp: node.childImageSharp,
  }));

  return (
    <>
      <Layout>
        <main className="page">
          <header className="hero">
            <div className="hero-text">
              <h1>Cantertrot Swimming</h1>
              <h4>Learn to swim with us in our beautiful pool in Houston</h4>
            </div>
          </header>
        </main>
      </Layout>
      <BackgroundSlider
        className="background-slider"
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "backgrounds" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2}
        transition={4}
        duration={8}
        images={["carousel1.jpg", "carousel2.jpg", "carousel3.jpg"]}
        bgWrapperStyle={{
          opacity: "0.5",
        }}
        contentStyle={{
          height: "100%",
          width: "100%",
          top: "0px",
          left: "0px",
          position: "absolute",
          zIndex: "-1",
        }}
        titleStyle={{
          height: "100%",
          color: "#fff",
          textAlign: "center",
          fontSize: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        descriptionsStyle={{
          color: "#fff",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        buttonStyle={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          border: "none",
          color: "#000",
          cursor: "pointer",
        }}
        buttonsWrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        contentSources={bgWrappers}
      />
    </>
  );
};

export default IndexPage;
