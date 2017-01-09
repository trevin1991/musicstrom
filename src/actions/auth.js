import SC from "soundcloud";
import * as actionTypes from "../constants/actionTypes";

function setMe(user) {
    return {
        type: actionTypes.ME_SET,
        user
    }
}

export function auth() {
    SC.connect().then((session) => {
        dispatch(fetchMe(session));
    })
}

function fetchMe(session) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(setMe(data));
        });
}