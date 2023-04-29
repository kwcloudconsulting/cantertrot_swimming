import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
const LessonList = ({ Alllessons = [] }) => {
  return (
    <div className="lesson-list">
      {Alllessons.map((lesson) => {
        const { id, title, image } = lesson;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="lesson">
            <GatsbyImage
              image={pathToImage}
              className="lesson-img"
              alt={title}
            />
            <h5>{title}</h5>
          </Link>
        );
      })}
    </div>
  );
};

export default LessonList;
