import React from "react";
import s from "./users.module.css"
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className="profile_block">
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