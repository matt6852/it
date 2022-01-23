import React, {Component} from 'react';

import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import {getError, loadUsers, setPage} from "../../redux/redusers/actionCreators";

class UsersPage extends Component {
    componentDidMount() {
        const users = axios.get(`https://reqres.in/api/users?per_page=${this.props.perPage}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.getUsers(res.data)
            }).catch(error => {
                console.log("error")
                this.props.setError(error)
            })
    }

    checkPage(i) {
        console.log(i, this.props.currentPage)
        if (i !== this.props.currentPage) {
            this.props.setNewPage(i)
            const users = axios.get(`https://reqres.in/api/users?per_page=${this.props.perPage}&page=${i}`)
                .then((res) => {
                    this.props.getUsers(res.data)
                }).catch(error => this.props.setError(error))
        }

    }

    renderPages = Array.from({length: this.props.pages}, (_, i) => i + 1)
        .map((i) => <div> <span style={{color: i === this.props.currentPage ? "red" : "black"}}
                                onClick={() => this.checkPage(i)} key={i}>{i}</span></div>)

    render() {
        const renderUser = this.props.users.map((user) => <User key={user.id} {...user}/>)
        return (
            <div>
                <h2>
                    UsersPage
                    {!this.props.error ? renderUser : <p>
                        {this.props.error.message}
                    </p>}
                </h2>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "10px"
                }}> {!this.props.error && this.renderPages}
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
        currentPage: state.usersPage.page,
        error: state.usersPage.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => dispatch(loadUsers(users)),
        setNewPage: (newPage) => dispatch(setPage(newPage)),
        setError: (error) => dispatch(getError(error))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);