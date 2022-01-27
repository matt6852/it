import React, {Component, useEffect} from 'react';

import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import {getError, loadUsers, setPage} from "../../redux/redusers/actionCreators";
import {Pagination} from 'antd';
import {Spin, Alert} from 'antd';

const UsersPage = (props) => {
    const fetchUsers = (page) => {
        const users = axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.perPage}`)
            .then((res) => {
                console.log(res.data)
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


    const renderUser = props.users.map((user) => <User key={user.id} user={user}/>)
    return (
        <div>

            <h2>

                UsersPage
                {!props.error ? renderUser : <p>
                    {props.error.message}
                </p>}
            </h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Spin tip="Loading..." size={"large"} spinning={!props.users.length}/>
            </div>


            <div style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "10px"
            }}>

                {!props.error && <Pagination onChange={(page) => checkPage(page)} total={props.total}/>}

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
        error: state.usersPage.error,
        total: state.usersPage.total
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