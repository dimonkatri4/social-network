import React, {useEffect, useState} from "react";
import style from "./profileStatus.module.css"

const ProfileStatusWithHook = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

   const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        let text = e.target.value;
        setStatus(text);
    }

        return <div>
            {!editMode &&
            <span onDoubleClick={props.isOwner && activateEditMode}>{props.status
            || props.isOwner && <span className={style.addStatus}>Add status</span>} </span>
            }
            {editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            }

        </div>

}
export default ProfileStatusWithHook