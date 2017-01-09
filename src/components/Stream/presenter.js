import React from "react";

export default class Stream extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {
                    this.props.tracks.map((track, key) => {
                        return <div className="track" key={ key }>{ track.title }</div>
                    })
                }
            </div>
        );
    }
}