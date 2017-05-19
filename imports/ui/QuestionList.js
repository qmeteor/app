/**
 * Created by Bien on 2017-05-17.
 */
import React from 'react';

export default class QuestionList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        };

    }

    render() {
        return (
            <div>
                <p>Answer Lists</p>
            </div>
        );
    }
}