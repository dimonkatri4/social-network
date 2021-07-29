import React from "react";
import style from "./modalWindow.module.css"

const ModalWindow = ({active, setActive,children}) => {
    return <div className={active ? `${style.modal} ${style.modal_active}` : `${style.modal}`}
                onClick={() => setActive(false)}>
        <div className={active ? `${style.modal_content} ${style.content_active}` : `${style.modal_content}`}
             onClick={(e) => e.stopPropagation()}>
            {children}
        </div>

    </div>
}

export default ModalWindow