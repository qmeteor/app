/**
 * Created by Bien on 2017-05-13.
 */
import React from 'react';
import Dropzone from 'react-dropzone';

import { s3, createAlbum } from './../../aws/s3/uploadprofileimage';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            files: []
        };

        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(e) {
        //e.preventDefault();
        console.log('dropped');
        //let albumName = "testname";
        //createAlbum(albumName);
    }

    render() {
        return (
            <section>
            <div className="dropzone">
                <Dropzone onDrop={this.onDrop}>
                    <p>drop here!</p>
                </Dropzone>
            </div>
            <aside>
                <h2>Dropped files</h2>
                <ul>
                    {this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)}
                </ul>
            </aside>
                {this.state.error ? <p>{this.state.error}</p> : null}
            </section>

        );
    }
}