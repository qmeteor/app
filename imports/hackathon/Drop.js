/**
 * Created by Bien on 2017-06-02.
 */
import React from 'react';
import Dropzone from 'react-dropzone';

export class Dropfile extends React.Component {


    render() {
        let dropzoneRef;

        return(
            <div>
                <div>
                    <Dropzone ref={(node) => { dropzoneRef = node; }} onDrop={(accepted, rejected) => { alert("Processing file...") }}>
                        <p>Drop files here.</p>
                    </Dropzone>
                    <button type="button" onClick={() => { dropzoneRef.open() }}>
                        Open File Dialog
                    </button>
                </div>
            </div>
        );
    };
}
