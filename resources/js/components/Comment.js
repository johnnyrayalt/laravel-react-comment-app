import React from "react";
import "../../sass/Comment.scss";

const Comment = ({ ...props }) => {
    const { name, email, comment } = props;

    return (
        <div className="comment-wrapper">
            <div className="comment-name-wrapper">
                <span className="italic">Author:</span> {name}
            </div>
            <div className="comment-email-wrapper">
                <span className="italic">Email:</span> {email}
            </div>
            <div className="line-break" />
            <div className="comment-comment-wrapper">{comment}</div>
        </div>
    );
};

export default Comment;
