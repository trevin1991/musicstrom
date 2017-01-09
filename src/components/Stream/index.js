import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Stream from "./presenter";

function mapStateToProps(state) {
    let { user } = state.auth;
    let tracks = state.track;
    return {
        user,
        tracks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);