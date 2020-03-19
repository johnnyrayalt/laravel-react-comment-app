import React, { Component } from "react";
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
        this.handleRefresh = this.handleRefresh.bind(this);
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

    handleRefresh() {
        this.setState({
            isSubmittedSuccessfully: false
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleAddNewComment}>
                <div className="form-group">
                    <label className="text" htmlFor="name">
                        <h2>Author Name:</h2>
                    </label>
                    <input
                        required
                        className="text"
                        placeholder="Please enter your name"
                        id="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div className="form-group">
                    <label className="text" htmlFor="email">
                        <h2>Author Email:</h2>
                    </label>
                    <input
                        required
                        className="text"
                        placeholder="Please enter your email address"
                        id="email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div className="form-group">
                    <label className="text" htmlFor="comment">
                        <h2>Comment:</h2>
                    </label>
                    <textarea
                        required
                        className="text"
                        id="comment"
                        name="comment"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div className="button-wrapper">
                    {this.state.isSubmittedSuccessfully ? (
                        <div>
                            <div className="success-message">
                                {this.state.successMessage}
                            </div>
                            <button
                                onClick={this.handleRefresh}
                                className="add-comment-button"
                            >
                                <span className="button-text">Another?</span>
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={this.props.action}
                            className="add-comment-button"
                        >
                            <span className="button-text">Add Comment</span>
                        </button>
                    )}
                </div>
            </form>
        );
    }
}

export default AddCommentForm;
