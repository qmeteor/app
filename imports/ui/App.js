/**
 * Created by Bien on 2017-05-17.
 */
import React from 'react'

import TitleBar from './TitleBar';
import Body from './Body';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        };
    }

    render() {
        //let title = 'Beanster'; //fuse between video, questions, and forum.
        //let subtitle = 'Share your knowledge with friends through original content';

        return (
            <div>
                <TitleBar/>

            </div>
        );
    }
}