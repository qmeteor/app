/**
 * Created by Bien on 2017-06-03.
 */
import React from 'react';



export class Library extends React.Component {

    constructor() {
        super();
        this.state = {
            caseSelected: '1'
        }
    }

    render() {
        return(
            <div className="ui divided items">
                <div className="item">
                    <div className="ui tiny image">
                        <img src="/images/wireframe/image.png"/>
                    </div>
                    <div className="middle aligned content">
                        <button className="btn-link" onClick={this.setState({caseSelected: '1'})}>Case ID: 15624 - Lewis vs Carl</button>
                    </div>
                </div>
                <div className="item">
                    <div className="ui tiny image">
                        <img src="/images/wireframe/image.png"/>
                    </div>
                    <div className="middle aligned content">
                        <button className="btn-link" onClick={this.setState({caseSelected: '2'})}>Issue Spotter ID: 15624 - Client ID: 678</button>
                    </div>
                </div>
                <div className="item">
                    <div className="ui tiny image">
                        <img src="/images/wireframe/image.png"/>
                    </div>
                    <div className="middle aligned content">
                        <button className="btn-link" onClick={this.setState({caseSelected: '3'})}>Case ID: 12463 - Fiora vs Johnston</button>
                    </div>
                </div>
            </div>

        );
    };
}