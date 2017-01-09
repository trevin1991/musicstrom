import SC from "soundcloud";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";

import App from "./components/App/index";
import Callback from "./components/Callback/index";
import Stream from "./components/Stream/index";
import { CLIENT_ID, REDIRECT_URI } from "./constants/auth";

console.log(REDIRECT_URI);
SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const TRACKS = [
    {
        title: "First Track"
    },
    {
        title: "Second Track"
    },
    {
        title: "Third Track"
    },
    {
        title: "Fourth Track"
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(TRACKS));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Stream } />
                <Route path="/" component={ Stream } />
                <Route path="/stream" component={ Stream } />
                <Route path="/callback" component={ Callback } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);