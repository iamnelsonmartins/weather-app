import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <section className="section" >
                <div className="container">
                    <section className="hero is-small">
                        <div className="hero-body has-text-centered">
                            <div className="container">
                                <h1 className="title">
                                    {this.props.title}
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
};

export default Header;