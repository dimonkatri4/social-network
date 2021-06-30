import React, {useEffect, useRef, useState} from "react";
import style from "./profileStatus.module.css"
import classNames from "classnames";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
        props.setErrorInStatus(null)
    }, [props.status,editMode]);

    const useOutsideClick = (ref) => {
        useEffect(() => {
            // Edit state if clicked on outside of element
            const handleClickOutside = e => {
                if (editMode && !ref.current.contains(e.target)) {
                    exitOfInputStatus();
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }, [ref,editMode]);
    }
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const updateProfileStatus = () => {
        props.updateStatus(status)
        if (status.length <= 300) {
            setEditMode(false)
        } else {
            props.setErrorInStatus()
        }
    }
    const exitOfInputStatus = () => {
        setEditMode(false);
        setStatus(props.status);
    }

    const onStatusChange = (e) => {
        let text = e.target.value;
        setStatus(text);
    }

    const handleKeyDown = (e) => {
        e.key === 'Enter' && updateProfileStatus();
        e.key === 'Escape' && exitOfInputStatus();
    }

    return <div className={style.statusBlock}>
        {!editMode &&
        <span className={style.textStatus} onDoubleClick={props.isOwner && activateEditMode}
              title="Double click to change status">{props.status
        || props.isOwner && <span className={style.addStatus}>Double click to add status</span>} </span>
        }
        {editMode &&
        <div className={style.inputBlock} ref={wrapperRef}>
            <input className={classNames("inputPlace", style.inputStatus)} onChange={onStatusChange}
                   autoFocus={true} value={status} onKeyDown={handleKeyDown}/>
            <span className={style.updateStatus}><FontAwesomeIcon icon={faCheck} onClick={() => updateProfileStatus()}/></span>
            <span className={style.close}><FontAwesomeIcon icon={faTimes} onClick={exitOfInputStatus}/></span>
        </div>
        }
        {
            props.errorInStatus && <div className={style.error}>{props.errorInStatus}</div>
        }

    </div>

}
export default ProfileStatusWithHook