import axios from "axios";
import React, { Component } from "react";
import "../../sass/Comment.scss";
import "../../sass/SingleCommentView.scss";
import BlogPost from "../components/BlogPost";
import Comment from "../components/Comment";
import IsLoading from "../components/IsLoading";

class SingleCommentView extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            comment: {}
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/comment/${id}`).then(response => {
            this.setState({
                isLoading: false,
                comment: response.data
            });
        });
    }

    render() {
        const { comment } = this.state;

        if (this.state.isLoading) {
            return <IsLoading className="is-loading" />;
        }
        return (
            <div className="single-comment-container">
                <div>
                    <BlogPost />
                </div>
                <Comment {...comment} />
            </div>
        );
    }
}

export default SingleCommentView;
