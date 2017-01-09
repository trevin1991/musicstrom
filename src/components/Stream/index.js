import React from "react";
import { connect } from "react-redux";
import Stream from "./presenter";

function mapStateToProps(state) {
    let tracks = state.track;
    return {
        tracks
    }
}

export default connect(mapStateToProps)(Stream);