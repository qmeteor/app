/**
 * Created by Bien on 2017-06-03.
 */
import React from 'react';
import { browserHistory } from 'react-router';



export class Card extends React.Component {

    render() {
        return(
            <div className="ui card">
                <div className="image">
                    <img src="../.././public/Banks_Timothy.jpg"/>
                </div>
                <div className="content">
                    <a className="header">Jesse Hernandez</a>
                    <div className="meta">
                        <span className="date">Law Student</span>
                    </div>
                    <div className="description">
                        Jesse is a student.
                    </div>
                </div>
                <div className="extra content">
                    <button className="btn-link">
                        <i className="user icon"></i>
                        2 Colleagues Collaborating
                    </button>
                </div>
            </div>
        );
    };
}