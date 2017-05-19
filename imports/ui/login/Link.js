/**
 * Created by Bien on 2017-03-24.
 */
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from './../../api/links';
import DropDown from './DropDown';

export default class Link extends React.Component {
    constructor (props) {
        super(props);

        //this.onLogout = this.onLogout.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }

    // onLogout() {
    //     Accounts.logout();
    // }

    onSubmit(e) {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if(url) {
            Links.insert({ url });
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <DropDown/>
            </div>
        );
    }
}

{/*<h1>Your Links</h1>*/}

{/*<p>Add Link</p>*/}
{/*<form onSubmit={this.onSubmit}>*/}
{/*<input type="text" ref="url" placeholder="URL"/>*/}
    {/*<button>Add Link</button>*/}
{/*</form>*/}