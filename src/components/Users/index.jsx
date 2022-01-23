import React, {Component} from 'react';

import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import {loadUsers, setPage} from "../../redux/redusers/actionCreators";

class UsersPage extends Component {
    componentDidMount() {
        const users = axios.get(`https://reqres.in/api/users?per_page=${this.props.perPage}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.getUsers(res.data)
            })
    }

    checkPage(i) {
        console.log(i, this.props.currentPage)
        if (i !== this.props.currentPage) {
            this.props.setNewPage(i)
            const users = axios.get(`https://reqres.in/api/users?per_page=${this.props.perPage}&page=${i}`)
                .then((res) => {
                    this.props.getUsers(res.data)
                })
        }

    }

    render() {
        const renderUser = this.props.users.map((user) => <User key={user.id} {...user}/>)
        return (
            <div>
                <h2>
                    UsersPage
                    {renderUser}
                </h2>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "10px"
                }}>{Array.from({length: this.props.pages}, (_, i) => i + 1)
                    .map((i) => <div> <span style={{color: i === this.props.currentPage ? "red" : "black"}}
                                            onClick={() => this.checkPage(i)} key={i}>{i}</span></div>)}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        perPage: state.usersPage.perPage,
        pages: state.usersPage.pages,
        currentPage: state.usersPage.page
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => dispatch(loadUsers(users)),
        setNewPage: (newPage) => dispatch(setPage(newPage))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);