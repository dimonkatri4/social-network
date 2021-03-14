import React, {useState} from "react";
import style from "./profileStatus.module.css"

const ProfileStatusWithHook = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState()

   const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }
    const onStatusChange = (e) => {
        let status = e.target.value;
        this.setState({
            status:status
        })
    }

        return <div>
            {!editMode &&
            <span onDoubleClick={activateEditMode}>{props.status
            || <span className={style.addStatus}>Add status</span>} </span>
            }
            {editMode &&
                <input  autoFocus={true} onBlur={deactivateEditMode}
                       />
            }

        </div>

}
export default ProfileStatusWithHook