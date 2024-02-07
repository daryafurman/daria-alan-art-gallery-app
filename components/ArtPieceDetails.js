import Image from "next/image";
import CommentForm from "./CommentForm";
import styled from "styled-components";
import { StyledHeader } from "./ArtPieces";
import FavoriteButton from "./FavoriteButton";

const Color = styled.span`
  color: ${(props) => props.color};
  margin-right: 8px;
  font-size: xxx-large;
  text-shadow: 0 4px 15px hsla(0, 0%, 0%, 0.2);
`;

const StyledArtPieceDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledArtDetailsContainer = styled.div`
  min-width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledImageAndColors = styled.div`
  text-align: center;
  flex-grow: 1;
  padding: 20px;
  margin: 5px;
`;
const StyledArtDetails = styled.div`
  margin-left: 15px;
  text-align: left;
  flex-grow: 1;
  position: relative;
  top: 170px;
`;
const StyledCommentsSection = styled.div`
  min-width: 600px;
  padding: 20px;
  margin: 5px;
  flex-grow: 1;
`;

export const StyledImage = styled.img`
  box-shadow: 0 4px 20px hsla(0, 0%, 0%, 0.2);
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
  isFavorite,
  onToggleFavorite,
}) {
  console.log("Colors:", colors);
  return (
    <>
      <StyledHeader>ART GALLERY</StyledHeader>
      <StyledArtPieceDetailBody>
        <h1>{title}</h1>
        <StyledArtDetailsContainer>
          {/* Display art piece details */}
          <StyledImageAndColors>
            <StyledImage
              className="art-piece-detail-image"
              src={image}
              alt={title}
              width={300}
              height={600}
            />
          </StyledImageAndColors>
          <StyledArtDetails>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
            <br />
            <h3>Artist: {artist}</h3>
            <h3>Year: {year}</h3>
            <h3>Genre: {genre}</h3>
            <br />
            <div>
              <h3>Colors used in this piece:</h3>
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
          </StyledArtDetails>
        </StyledArtDetailsContainer>

        <StyledCommentsSection>
          {/* Display comments */}
          <div className="comments-container">
            <h2>Comments</h2>
            <ul className="comment-items">
              {comments && comments.length > 0 ? (
                comments.map((comment, index) => (
                  <li key={index}>
                    <p>{comment.text}</p>
                    <p>Posted on {comment.date}</p>
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
        </StyledCommentsSection>
      </StyledArtPieceDetailBody>
    </>
  );
}
