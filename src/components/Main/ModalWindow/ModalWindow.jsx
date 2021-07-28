import React from "react";
import style from "./modalWindow.module.css"

const ModalWindow = ({active, setActive,children}) => {
    return <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`}
                onClick={() => setActive(false)}>
        <div className={style.modal_content}
             onClick={(e) => e.stopPropagation()}></div>
        {children}
    </div>
}

export default ModalWindow