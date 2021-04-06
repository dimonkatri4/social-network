import React, {useState} from "react";
import style from "./pagination.module.css";

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
            <button onClick={() => {setPortionNumber( portionNumber-1)}}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span className={`${currentPage === p && style.current} ${style.numberPage}`}
                                      onClick={(event) => {
                                          onPageChanged(p)
                                      }}
            >{p}</span>)}
            { portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber( portionNumber+1)}} >Next</button> }
        </div>
    )
}
export default Pagination