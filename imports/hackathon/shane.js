/**
 * Created by Bien on 2017-06-03.
 */
import React from 'react';



export class Shane extends React.Component {

    render() {
        return(
            <div className="ui card">
                <div className="image">
                    <img src="../.././public/Banks_Timothy.jpg"/>
                </div>
                <div className="content">
                    <a className="header">Shane Smith</a>
                    <div className="meta">
                        <span className="date">Lawyer</span>
                    </div>
                    <div className="description">
                        Accidental Damage Specialist.
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="checkmark icon"></i>
                        Remove from case
                    </a>
                    <a>
                        <i className="user icon"></i>
                        View profile
                    </a>
                </div>
            </div>
        );
    };
}