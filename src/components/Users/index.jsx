import React, {Component} from 'react';

import {connect} from "react-redux";
import User from "./User";

class UsersPage extends Component {

    render() {
        const renderUser = this.props.users.map((user) => <User key={user.id} {...user}/>)
        return (
            <div>
                <h2>
                    UsersPage
                    {renderUser}
                </h2>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


export default connect(mapStateToProps)(UsersPage);