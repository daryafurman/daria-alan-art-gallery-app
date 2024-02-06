import Image from "next/image";
import CommentForm from "./CommentForm";

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
}) {
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

{
  /* <ul className="comment-items">
          {comments.map((comment, index) => (
            <li key={index}>
              {comment.text}
              <br />
              <br />
              <div className="comment-date">Posted on {comment.date}</div>
              <hr />
            </li>
          ))}
        </ul> */
}

// In this modification, I added a conditional check comments && comments.length > 0 before mapping over the comments array. This ensures that the mapping only occurs if comments is defined and has at least one item. If comments is undefined or empty, it will display a message saying "No comments yet.".
