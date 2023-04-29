import React from "react";
import TagsList from "./TagsList";
import Lessonlist from "./Lessonlist";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allContentfulCantertrotSwimming(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const Alllessons = () => {
  const data = useStaticQuery(query);
  const lessons = data.allContentfulCantertrotSwimming.nodes;

  return (
    <section className="lesson-container">
      {lessons.map((lesson) => (
        <div key={lesson.id}>
          <h2>{lesson.title}</h2>
          <GatsbyImage
            image={lesson.image.gatsbyImageData}
            alt={lesson.title}
          />
        </div>
      ))}
      <Lessonlist lessons={lessons} />
      <TagsList lessons={lessons} />
    </section>
  );
};

export default Alllessons;
