import React from "react";
import s from "./users.module.css"
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCountUsers(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pageNumber = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pageCount = [];

        for (let i=1; i<=pageNumber; i++ ) {
            pageCount.push(i)
        }

        return (
            <div className="profile_block">
                <div>
                    {pageCount.map(p => <span className={this.props.currentPage === p && s.current}
                    onClick={(event) => {this.onPageChanged(p)} }
                    >{p}</span>)}
                </div>
                {
                    this.props.users.map(u => <div>
                        <div><img
                            src={u.photos.small == !null ? u.photos.small : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'}
                            alt="" className={s.ava}/></div>
                        <div>{u.followed ?
                            <button onClick={() => this.props.unfollow(u.id)}>Follow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}</div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>
                            <div>"u.location.city"</div>
                            <div>"u.location.country"</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


export default Users