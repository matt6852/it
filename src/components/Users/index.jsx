import React, {Component, useEffect} from 'react';

import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import {getError, isLoading, loadUsers, setPage} from "../../redux/redusers/actionCreators";
import {Pagination} from 'antd';
import {Spin, Alert} from 'antd';
import {samuraiAPI} from "../../dal/api";

const UsersPage = (props) => {
    const fetchUsers = (page) => {
        props.isLoading(true)
        samuraiAPI.getUsers(page, props.perPage)
            .then((res) => {
                props.loadUsers(res.data)
                props.isLoading(false)
            }).catch(error => {
            props.getError(error)
            props.isLoading(false)
        })
    }
    useEffect(() => {
        if (props.users.length < 1) {
            fetchUsers(props.currentPage)
        }

    }, [])

    const checkPage = (i) => {
        if (i !== props.currentPage) {
            props.setPage(i)
            fetchUsers(i)
        }
    }

    const renderUser = props.users.map((user) => <User key={user.id} user={user}/>)
    return (
        <div>

            <div style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "10px"
            }}>
                {!props.error &&
                    <Pagination defaultCurrent={props.currentPage} current={props.currentPage}
                                onChange={(page) => checkPage(page)}
                                total={props.total}
                                showSizeChanger={false}/>}


            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Spin tip="Loading..." size={"large"} spinning={props.loading}/>
            </div>
            <h2>
                UsersPage
                {!props.error ? renderUser : <p>
                    {props.error.message}
                </p>}
            </h2>


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
        total: state.usersPage.total,
        loading: state.usersPage.isLoading
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUsers: (users) => dispatch(loadUsers(users)),
//         setNewPage: (newPage) => dispatch(setPage(newPage)),
//         setError: (error) => dispatch(getError(error)),
//         isLoading: (toggle) => dispatch(isLoading(toggle))
//     }
// }


export default connect(mapStateToProps, {
    loadUsers,
    setPage,
    getError,
    isLoading
})(UsersPage);