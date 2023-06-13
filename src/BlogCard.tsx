import React from "react";

type Props = {
  title: string;
  body: string;
};

function BlogCard({ title, body }: Props) {
  return (
    <div className="blogCard">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default BlogCard;
