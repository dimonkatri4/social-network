import React, {useEffect, useState} from "react";
import style from "./pagination.module.css";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, friends, userSearchName}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let currentPortion = Math.ceil(currentPage / portionSize);
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = ((portionNumber - 1) * portionSize + 1);
    let rightPortionPageNumber = (portionNumber * portionSize);

    useEffect(() => {
        return setPortionNumber(currentPortion)
    }, [friends, userSearchName, currentPortion])

    return (
        <div className={style.pageCount}>
            {portionNumber > 1 &&
            <>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(1)}
                      title="To the first portion pages"
                >
                    <FontAwesomeIcon icon="angle-double-left"/>
                </span>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(portionNumber - 1)}
                      title="Previous portion of pages"
                >
                    <FontAwesomeIcon icon="angle-left"/>
                </span>
            </>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span className={classNames(currentPage === p && style.current, style.numberPage)}
                                onClick={(event) => onPageChanged(p)}
                                key={p}
                                title={currentPage !== p ? "Click to select a page" : "Current page"}
                >{p}</span>)}
            {portionCount > portionNumber &&
            <>
                <span className={style.arrow}
                      onClick={() => setPortionNumber(portionNumber + 1)}
                      title="Next portion of pages"
                >
                    <FontAwesomeIcon icon="angle-right"/>
                </span>
                    <span className={style.arrow}
                          onClick={() => setPortionNumber(portionCount)}
                          title="To the last portion pages"
                    >
                <FontAwesomeIcon icon="angle-double-right"/>
            </span>
                </>}

        </div>
    )
}
export default Pagination