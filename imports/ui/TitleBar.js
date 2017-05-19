/**
 * Created by Bien on 2017-05-16.
 */
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Login from './login/Login';
import Answer from './QuestionList';


export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };
    }

    render() {
        return (
            <div className="title-bar">
                <ul className="wrapper">
                    <span className="leftbar">
                        <button className="btn">Logo</button>
                    </span>
                    <span className="rightbar">
                        <Login/>
                    </span>
                    <span className="rightbar">
                        <button className="btn btn-link">Notifications</button>
                    </span>
                    <span className="rightbar">
                        <button className="btn btn-link">Respond</button>
                    </span>
                    <span className="rightbar">
                        <button className="btn btn-link">Watch</button>
                    </span>
                    <SearchBar/>
                </ul>
            </div>
        );
    }
}


TitleBar.propTypes = {
  title: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'App'
};