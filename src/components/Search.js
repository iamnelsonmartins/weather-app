import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
        }
        this.handleSearchInputChanges = this.handleSearchInputChanges.bind(this)
        this.resetInputField = this.resetInputField.bind(this)
        this.callSearchFunction = this.callSearchFunction.bind(this)
    }

    handleSearchInputChanges = (e) => {
        e.preventDefault();
        this.setState({ searchValue: e.target.value })
    }

    resetInputField = () => {
        this.setState({ searchValue: '' })
        document.querySelector('.input').value = ''
    }

    callSearchFunction = (e) => {
        e.preventDefault();
        this.props.search(this.state.searchValue)
        this.resetInputField();
    }

    render() {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-half'>
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <input
                                        className="input"
                                        type="text"
                                        value={this.state.searchValue}
                                        onChange={this.handleSearchInputChanges} />
                                </div>
                                <div className="control">
                                    <input
                                        className="button is-info"
                                        onClick={this.callSearchFunction}
                                        type="submit"
                                        value="SEARCH" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Search