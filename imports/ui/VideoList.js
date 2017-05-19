/**
 * Created by Bien on 2017-05-16.
 */
import React from 'react';
import VideoListItem from './VideoListItem';


export default class VideoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
            videoItems: []
        };
    }

    componentWillMount() {
        this.setState({videoItems: this.props.videos.map((video) => {
                return <VideoListItem key={Math.random()} video={video}/>
                }
            )}
        )
    };

    render(props) {
        return (
            <ul>
                {this.state.videoItems}
            </ul>
        );
    }
};