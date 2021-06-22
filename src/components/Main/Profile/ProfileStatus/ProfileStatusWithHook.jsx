import React, {useEffect, useState} from "react";
import style from "./profileStatus.module.css"
import classNames from "classnames";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileStatusWithHook = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
        props.setErrorInStatus(null)
    }, [props.status])

   const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        props.updateStatus(status)
        if (status.length <= 300){
        setEditMode(false)
        } else {
            props.setErrorInStatus()
        }
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
                <div className={style.inputBlock}>
                <input className={classNames("inputPlace",style.inputStatus)} onChange={onStatusChange}
                       onBlur={deactivateEditMode}  autoFocus={true}  value={status} />
                       <span className={style.close}><FontAwesomeIcon icon={faTimes} onClick={() => setStatus(null)}/></span>
                </div>
            }
            {
                props.errorInStatus && <div className={style.error}>{props.errorInStatus}</div>
            }

        </div>

}
export default ProfileStatusWithHook