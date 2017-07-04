/**
 * Created by Bien on 2017-05-25.
 */
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';
import { Notifications } from '../hackathon/__notifications';
import Tabs from './profile/Profile';



export class MainContents extends React.Component {

    render() {
        if (this.props.selectedHeaderItem === '/videos') {
            return (
                <div className="ui container">
                    <section className="column-left">
                        <div className="video_column_title">
                            <header className="container_header">
                                <div className="container_header_text">
                                    Trending Videos In The Community
                                </div>
                                <span>
                                    <button className="btn-link">Votes</button>
                                    <button className="btn-link">Newest</button>
                                    <button className="btn-link">Interest</button>
                                </span>
                            </header>
                            <div className="ui divider"></div>
                        </div>

                        <article>
                        <div className="section_links">
                                Answer | <button className="btn-link">Life</button> | <button className="btn-link">Sept 16</button>
                            </div>
                        <header className="section_header">
                            <div className="section_text">What was the happiest moment of your life?</div>
                        </header>

                            <div className="username_article_layout">
                                <div className="avatar_wrapper">
                                    <img className="avatar img-circle" src="bien.jpg"/>
                                </div>
                                <div className="user_details">
                                    <div className="article_user"><button className="btn-link">Bien Pham</button>on<button className="btn-link"> Daddy Page</button></div>
                                    <div className="article_response_date"><button className="btn-link">Answered Sept 16</button></div>
                                </div>
                            </div>
                            <p>My daughter was born 6 lbs 8 ounces, she is beautiful and the first time she smiled she captured my heart forever.</p>
                                <video controls height="220" width="300">
                                    <source src="happy.mp4"/>
                                    <source src="happy.MOV"/>
                                    <source src="happy.ogv"/>
                                    Your browser does not support html5 video's please update your browser.
                                </video>
                            <footer className="article_footer">
                                <div className="btn-group btn-group-xs" role="group">
                                    <button type="button" className="btn btn-danger">Donate</button>
                                    <button type="button" className="btn btn-default"><i className="alarm icon"></i></button>
                                    <button type="button" className="btn btn-default">9.4M</button>
                                    <button className="btn-link">Comments</button>
                                </div>
                                <div>

                                    <button className="btn btn-default btn-xs">Upvote</button>
                                    <button className="btn-link">Downvote</button>
                                </div>
                            </footer>
                        </article>
                        <div className="ui divider"></div>
                    </section>
                    <section className="column-right">
                        <header>
                            <div>Related Videos</div>
                        </header>
                        <div className="ui divider"></div>
                        <br/> <br/> <br/> <br/> <br/>
                        <header>
                            <div>Subscribe To Channels</div>
                        </header>
                        <div className="ui divider"></div>
                    </section>
                </div>
            );
        } else if (this.props.selectedHeaderItem === '/questions') {
            return (
                <div className="ui container">
                    <section className="column-left">
                        <div className="video_column_title">
                            <header className="container_header">
                                <div className="container_header_text">
                                    Questions Asked by The Community
                                </div>
                            </header>
                            <div className="ui divider"></div>
                        </div>

                        <article>
                            <div className="section_links">
                                Question posed | <button className="btn-link">Fashion</button> | <button className="btn-link">45min</button>
                            </div>
                            <header className="section_header">
                                <div className="section_text">How do you make a cross stitch?</div>
                            </header>
                            <p>Trying to make a repair to my dress pants after it ripped.</p>

                            <footer className="article_footer">
                                    <div>
                                        <button className="btn-link">Upload a response</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-default btn-xs">Follow</button>
                                        <button className="btn-link">Downvote</button>
                                    </div>
                            </footer>
                        </article>
                        <div className="ui divider"></div>
                    </section>
                    <section className="column-right">
                        <header>
                            <div>Sponsored Ads</div>
                        </header>
                        <div className="ui divider"></div>
                    </section>
                </div>
            );
        } else if (this.props.selectedHeaderItem === '/notifications') {
            return (

                <div className="ui container">
                    <h3>Notifications</h3>
                    <Notifications/>
                </div>
            );
        } else if (this.props.selectedHeaderItem === '/avatar') {
            return (
                <div className="ui container">
                    <h2>Video Responses</h2>
                </div>
            );
        } else if (this.props.selectedHeaderItem === '/') {
            return (
                <div className="ui container">
                    <h2>Video Reponses</h2>
                </div>
            );
        } else if (this.props.selectedDropDownItem === '/profile') {
            return (
                <div className="ui container">
                    <h2>Profile</h2>
                </div>
            );
        } else if (this.props.selectedDropDownItem === '/channels') {
            return (
                    <div className="ui container">
                        <h2>Channels</h2>
                    </div>
            );
        } else if (this.props.selectedDropDownItem === '/messages') {
            return (
                <div className="ui container">
                    <h2>Messages</h2>
                </div>
            );
        } else if (this.props.selectedDropDownItem === '/stats') {
            return (
                <div className="ui container">
                    <h2>Statistics</h2>
                </div>
            );
        } else if (this.props.selectedDropDownItem === '/settings') {
            return (
                <div className="ui container">
                    <h2>Settings</h2>
                </div>
            );
        } else {
            return (
                <p>We searched everywhere and we couldn't find what you are looking for.</p>
            );
        }
    }
}

MainContents.propTypes = {
    selectedHeaderItem: PropTypes.string,
    selectedDropDownItem: PropTypes.string,
};

export default createContainer(() => {
    const selectedHeaderItem = Session.get('selectedHeaderItem');
    const selectedDropDownItem = Session.get('selectedDropDownItem');

    return {
        selectedHeaderItem,
        selectedDropDownItem,
    };
}, MainContents);