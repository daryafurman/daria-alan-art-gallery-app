import Image from "next/image";
import CommentForm from "./CommentForm";
import styled from "styled-components";

const Color = styled.span`
  color: ${(props) => props.color};
  margin-right: 8px;
  font-size: xxx-large;
  text-shadow: 0 4px 15px hsla(0, 0%, 0%, 0.2);
`;

// comments: new prop to receive comments
// onSubmitComment: new prop to handle comment submission
export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  comments,
  onSubmitComment,
  colors,
}) {
  console.log("Colors:", colors);
  return (
    <>
      {/* Display art piece details */}
      <h1>{title}</h1>
      <Image
        className="art-piece-detail-image"
        src={image}
        alt={title}
        width={500}
        height={400}
      />
      <div className="used-colors-container">
        <p>Colors used in this piece:</p>
        <div role="art-piece-color-list">
          {colors && colors.length > 0 ? (
            colors.map((color, index) => (
              <Color key={index} color={color} aria-label={color}>
                ●
              </Color>
            ))
          ) : (
            <p>No colors specified.</p>
          )}
        </div>
      </div>
      <br />
      <h3>Artist: {artist}</h3>
      <h3>Year: {year}</h3>
      <h3>Genre: {genre}</h3>

      {/* Display comments */}
      <div className="comments-container">
        <h2>Comments</h2>
        <ul className="comment-items">
          {comments && comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index}>
                {comment.text}
                <br />
                <br />
                <div className="comment-date">Posted on {comment.date}</div>
                <hr />
              </li>
            ))
          ) : (
            <li>No comments yet.</li>
          )}
        </ul>
      </div>

      {/* Render CommentForm and pass onSubmitComment as a prop */}
      <CommentForm onSubmitComment={onSubmitComment} />
    </>
  );
}
