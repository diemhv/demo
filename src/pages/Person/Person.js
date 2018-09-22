import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import action from '../../actions/index';

import './Person.css';

class Person extends Component {
    componentWillMount() {
        this.props.getUser(this.props.match.params.username);
    }

    render() {
        let { user, status } = this.props.userInfo;
        console.log(user);
        return (
            <div id="main-wrapper">
                <div className="header">
                    <div id="btn-back">
                        <NavLink to="/home"><li className="fa">&#xf104;</li>  Back</NavLink>
                    </div>
                    <h5 className="title">Person</h5>
                </div>
                <div id="content">
                    {status === "success" && (
                        <div id="info">
                            <div id="avatar-container"><img className="avatar" src={user.avatar_url} /></div>
                            <div id="info-container">
                                <h5><b>{user.name}</b></h5>
                                <span>{user.location}</span>
                                <hr />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userInfo: state.userReducer
});
const mapDispatchToProps = {
    getUser: action.getUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Person);