import React from "react";
import "../../sass/Comment.scss";

const Comment = ({ ...props }) => {
    const { name, email, comment } = props;

    return (
        <div className="comment-wrapper">
            <div className="comment-name-wrapper">
                <h2 className="italic">Author:</h2>
                <span className="text">{name}</span>
            </div>
            <div className="comment-email-wrapper">
                <h2 className="italic">Email:</h2>
                <span className="text">{email}</span>
            </div>
            <div className="line-break" />
            <div className="comment-comment-wrapper text">{comment}</div>
        </div>
    );
};

export default Comment;
