import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";


let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, follow, unfollow, ...props}) => {
    return (
        <div className="profile_block">
            <Pagination
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            <div>
                {
                    props.users.map(u => <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />)
                }
            </div>
        </div>
    )
}
export default Users