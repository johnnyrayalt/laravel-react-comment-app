import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/CommentListView.scss";
import "../../sass/IsLoading.scss";
import AddCommentForm from "../components/AddCommentForm";
import BlogPost from "../components/BlogPost";
import Comment from "../components/Comment";
import IsLoading from "../components/IsLoading";

class CommentsListView extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            comments: [],
            update: false
        };
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        axios
            .get("/api/comments")
            .then(response => {
                this.setState({
                    isLoading: false,
                    comments: response.data
                });
            })
            .catch(error => {
                return new Error(error);
            });
    }

    handler() {
        this.setState({
            update: true
        });
        if (this.state.update) {
            axios
                .get("/api/comments")
                .then(response => {
                    this.setState({
                        isLoading: false,
                        comments: response.data,
                        update: false
                    });
                })
                .catch(error => {
                    return new Error(error);
                });
        }
    }

    render() {
        const { comments } = this.state;

        if (this.state.isLoading) {
            return <IsLoading className="is-loading" />;
        }

        return (
            <div className="comment-list-container">
                <div>
                    <BlogPost />
                </div>
                <h2 className="section-header-text">Comments</h2>
                <div className="comment-list-ul-container">
                    <ul className="comment-list-ul">
                        {comments.map(comment => (
                            <Link
                                className="link-to-comment"
                                to={`/comment/${comment.id}`}
                                key={comment.id}
                            >
                                <li className="comment-list-li">
                                    <Comment {...comment} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="add-comment-form-container">
                    <AddCommentForm action={this.handler} />
                </div>
            </div>
        );
    }
}

export default CommentsListView;
