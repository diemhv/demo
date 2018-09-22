import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import './Home.css';

class Home extends Component {
    render() {
        let topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
        return (
            <div id="main-wrapper">
                <div className="header">
                    <h5 className="title">Home</h5>
                </div>
                <div id="content">
                    <h4><b>Top 5 GitHup Users</b></h4>
                    <span>Tap the ussername to see more information</span>
                    {topFive && topFive.map((user, key) => (
                        <NavLink className="btn btn-primary" to={"/person/" + user.toLowerCase()} key={key}>{user}</NavLink>
                    ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);