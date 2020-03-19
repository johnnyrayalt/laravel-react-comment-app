import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CommentsListView from "../views/CommentsListView";
import SingleCommentView from "../views/SingleCommentView";
import AddCommentView from "../views/AddCommentView";
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={CommentsListView} />
                        <Route
                            exact
                            path="/comment/:id"
                            component={SingleCommentView}
                        />
                        <Route
                            exact
                            path="/add-comment"
                            component={AddCommentView}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
