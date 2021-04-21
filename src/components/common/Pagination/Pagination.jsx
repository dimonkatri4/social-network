import React, {useState} from "react";
import style from "./pagination.module.css";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

let Pagination = ({totalItemsCount,pageSize,currentPage,onPageChanged, portionSize = 10}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = ((portionNumber-1)*portionSize+1);
    let rightPortionPageNumber = (portionNumber*portionSize);

    return (
        <div className={style.pageCount}>
                { portionNumber > 1 &&
            <FontAwesomeIcon className={style.arrowLeft} icon={faAngleDoubleLeft} onClick={() => {setPortionNumber( portionNumber-1)}} />}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span className={classNames(currentPage === p && style.current, style.numberPage)}
                                      onClick={(event) => {
                                          onPageChanged(p)
                                      }}
            >{p}</span>)}
            { portionCount > portionNumber &&
                <FontAwesomeIcon className={style.arrowRight} icon={faAngleDoubleRight} onClick={() => {setPortionNumber( portionNumber+1)}} />}
        </div>
    )
}
export default Pagination