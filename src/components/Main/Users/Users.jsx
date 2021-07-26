import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";
import style from "./users.module.css"
import classNames from "classnames";
import SearchUsersReduxForm from "./SearchUsers";


let Users = ({totalUsersCount, pageSize,
                 currentPage, onPageChanged,
                 follow, unfollow,
                 showFriends,isFriendsList,
                 searchUsers,clearForm,userSearchName, ...props}) => {

    const onSubmit = (formData) => {
        searchUsers(formData.searchUsers)
    }

    return (
        <div className="profile_block">
            <div className={classNames("caption",style.friendsCaption)}>
                <h3 onClick={() => {
                    showFriends(true);
                    clearForm();
                }}
                    className={classNames(isFriendsList &&  style.friendsTitleActive,style.friendsTitle)}>
                    My Friends</h3>
                <h3 onClick={() => {
                    showFriends(false);
                    clearForm();
                }}
                    className={classNames(!isFriendsList &&  style.friendsTitleActive,style.friendsTitle)}>
                    All Users</h3>
            </div>
            <SearchUsersReduxForm onSubmit={onSubmit} searchUsers={searchUsers} userSearchName={userSearchName} />
            <Pagination
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                friends={isFriendsList}
                userSearchName={userSearchName}
            />
            <div>
                {
                    props.users.map(u => <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                        scrollToMainPhoto={props.scrollToMainPhoto}

                    />)
                }
            </div>
        </div>
    )
}
export default Users