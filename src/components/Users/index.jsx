import React, {useEffect} from 'react';

import {connect, useDispatch} from "react-redux";
import User from "./User";
import {getUsersThunk, setPage} from "../../redux/redusers/actionCreators";
import {Pagination} from 'antd';
import {Spin,} from 'antd';
import {LOAD_USERS} from "../../redux/redusers/actionTypes";


const UsersPage = (props) => {
    const dispatch = useDispatch()
    const fetchUsers = (page) => {
        props.getUsersThunk(page, props.perPage)
    }
    useEffect(() => {
        if (props.users.length < 1) {
            fetchUsers(props.currentPage)
            // dispatch({type: "start"})
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

export default connect(mapStateToProps, {
    setPage,
    getUsersThunk
})(UsersPage);