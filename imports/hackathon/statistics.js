/**
 * Created by Bien on 2017-06-03.
 */
import React from 'react';



export class Statistic extends React.Component {

    render() {
        return(
            <div className="ui statistics">
                <div className="statistic">
                    <div className="value">
                        15
                    </div>
                    <div className="label">
                        Colleagues
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        100
                    </div>
                    <div className="label">
                        Case Load
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        22
                    </div>
                    <div className="label">
                        Clients
                    </div>
                </div>
                <br/>
                <br/>
                <div className="statistic">
                    <div className="value">
                        55
                    </div>
                    <div className="label">
                        Uploaded Briefs
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        92
                    </div>
                    <div className="label">
                        Workload (hours)
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        794
                    </div>
                    <div className="label">
                        Denton Points
                    </div>
                </div>
            </div>
        );
    };
}