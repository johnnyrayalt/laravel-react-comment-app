import React, { Component, useState, useEffect } from "react";
import "../../sass/AddCommentForm.scss";

class AddCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comment: "",
            isSubmittedSuccessfully: false,
            successMessage: "Success!"
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleAddNewComment = this.handleAddNewComment.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAddNewComment(event) {
        event.preventDefault();

        const comment = {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        };

        axios.post("/api/comments", comment).then(resposne => {
            this.setState({
                name: "",
                email: "",
                comment: "",
                isSubmittedSuccessfully: true
            });
            this.props.action();
        });
    }

    handleReset() {
        this.setState({
            isSubmittedSuccessfully: false
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleAddNewComment}>
                <div className="form-group">
                    <label htmlFor="name">Author Name:</label>
                    <input
                        required
                        placeholder="Please enter your name"
                        id="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Author Email:</label>
                    <input
                        required
                        placeholder="Please enter your email address"
                        id="email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        required
                        id="comment"
                        name="comment"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.handleFieldChange}
                    />
                </div>

                {this.state.isSubmittedSuccessfully ? (
                    <>
                        <div className="no-submit">
                            {this.state.successMessage}
                        </div>
                        <button
                            onClick={this.handleReset}
                            className="add-comment-button"
                        >
                            Another?
                        </button>
                    </>
                ) : (
                    <button
                        onClick={this.props.action}
                        className="add-comment-button"
                    >
                        Add Comment
                    </button>
                )}
            </form>
        );
    }
}

export default AddCommentForm;
