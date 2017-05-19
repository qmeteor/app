/**
 * Created by Bien on 2017-05-16.
 */
import React from 'react';

import VideoList from './VideoList';



export default class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };
    }

    componentWillMount() {
        let data = ['video1', 'video2', 'video3']; // call for videos here from aws sdk

        this.setState({videos: data});
    }
    //automatically renders list of videos for main page login behind this? user interests
    render() {
        return (
            <div>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}