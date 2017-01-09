import React from "react";

export default class Stream extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this);
        return (
            <div>
                <div>{ this.props.user ? user.username : "no user :(" }</div>
                <div>
                    <button onClick={ this.props.onAuth } type="button">Login</button>
                </div>
                <br/>
                <div>
                    {
                        this.props.tracks.map((track, key) => {
                            return <div className="track" key={ key }>{ track.title }</div>
                        })
                    }
                </div>
            </div>
        );
    }
}