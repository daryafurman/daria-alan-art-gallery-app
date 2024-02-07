// CommentForm.js handles the input field for the comment and triggers the onSubmitComment prop when the form is submitted.
// The handleCommentSubmit function prevents the default form submission, checks for empty comments, creates a new comment object, and then calls the parent's onSubmitComment function.

import React, { useState } from "react";

export default function CommentForm({ onSubmitComment }) {
  const [commentText, setCommentText] = useState(""); // state for the input text

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") {
      return; // prevent submitting empty comments
    }

    const newComment = {
      text: commentText, // original state from comment, empty string
      date: new Date().toLocaleString(), // capture current date and time
    };

    // pass the new comment to the parent component
    onSubmitComment(newComment);

    // clear the input field after submitting
    setCommentText("");
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <label>
        <p>Add a comment:</p>
        <textarea
          placeholder="Enter your comment..."
          rows={5}
          cols={100}
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
