import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <section className="section" >
                <div className="container">
                    <section className="hero is-small">
                        <div className="hero-body has-text-centered">
                            <div className="container">
                                <p className="title">
                                    {this.props.title}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
};

export default Header;