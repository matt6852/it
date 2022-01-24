import React, {Component, useEffect} from 'react';

import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import {getError, loadUsers, setPage} from "../../redux/redusers/actionCreators";

const UsersPage = (props) => {
    const fetchUsers = (page) => {
        const users = axios.get(`https://reqres.in/api/users?per_page=${props.perPage}&page=${page}`)
            .then((res) => {
                props.getUsers(res.data)
            }).catch(error => {
                props.setError(error)
            })
    }
    useEffect(() => {
        if (props.users.length < 1) {
            fetchUsers(props.currentPage)
        }

    }, [])
    const checkPage = (i) => {
        if (i !== props.currentPage) {
            props.setNewPage(i)
            fetchUsers(i)
        }
    }
    const renderPages = Array.from({length: props.pages}, (_, i) => i + 1)
        .map((i) => <div key={i}> <span style={{color: i === props.currentPage ? "red" : "black"}}
                                        onClick={() => checkPage(i)}>{i}</span></div>)

    const renderUser = props.users.map((user) => <User key={user.id} user={user}/>)
    return (
        <div>
            <h2>
                UsersPage
                {!props.error ? renderUser : <p>
                    {props.error.message}
                </p>}
            </h2>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "10px"
            }}> {!props.error && renderPages}
            </div>
        </div>
    );
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