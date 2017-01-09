import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";

import Stream from "./components/Stream/index";

const TRACKS = [
    {
        title: "First Track"
    },
    {
        title: "Second Track"
    },
    {
        title: "Third Track"
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(TRACKS));

ReactDOM.render(
    <Provider store={ store }>
        <Stream/>
    </Provider>,
    document.getElementById("app")
);