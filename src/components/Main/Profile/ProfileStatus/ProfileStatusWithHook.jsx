import React, {useEffect, useState} from "react";
import style from "./profileStatus.module.css"
import classNames from "classnames";

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

        return <div className={style.statusBlock}>
            {!editMode &&
            <span className={style.textStatus} onDoubleClick={props.isOwner && activateEditMode} title="Double click to change status">{props.status
            || props.isOwner && <span className={style.addStatus}>Double click to add status</span>} </span>
            }
            {editMode &&
                <input className={classNames("inputPlace",style.inputStatus)} onChange={onStatusChange}
                       onBlur={deactivateEditMode}  autoFocus={true}  value={status} />
            }

        </div>

}
export default ProfileStatusWithHook