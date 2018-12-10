import React, { Component } from 'react';
import queryString from 'query-string';

class Main extends Component {
    constructor(props){
        super(props)
        const link = queryString.parse(this.props.location.search).p
        this.props.history.replace(link)
    }

    render() {
        return (
            <div>
                Main 
            </div>
        );
    }
}

export default Main;