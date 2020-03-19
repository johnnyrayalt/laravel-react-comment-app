import React from "react";
import "../../sass/BlogPost.scss";

const BlogPost = () => {
    return (
        <div className="blog-post-container">
            <img src={"https://cataas.com/cat"} alt="a cute kitty" />
            <div className="blog-text">
                <p>Meow meow</p>
                <p>It's only ever one post and its always a cat.</p>
            </div>
            <div className="line-break"></div>
        </div>
    );
};

export default BlogPost;
