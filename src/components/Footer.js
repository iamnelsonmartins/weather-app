import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </footer>
        );
    }
};

export default Footer;