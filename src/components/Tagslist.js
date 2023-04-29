import React from "react";
import { Link } from "gatsby";

const TagsList = ({ lessons }) => {
  return (
    <div className="tag-container">
      <h4>Lessons</h4>
      <div className="tags-list">
        {lessons.map((lesson, index) => {
          const { title } = lesson;
          return (
            <Link to={`/${title}`} key={index}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
