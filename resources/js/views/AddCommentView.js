import axios from "axios";
import React, { Component } from "react";
import BlogPost from "../components/BlogPost";
import AddCommentForm from "../components/AddCommentForm";

class AddCommentView extends Component {
    render() {
        return (
            <div className="add-comment-view-container">
                <AddCommentForm />
            </div>
        );
    }
}

export default AddCommentView;
