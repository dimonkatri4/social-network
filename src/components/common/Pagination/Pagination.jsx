import React from "react";
import style from "./pagination.module.css";

let Pagination = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {
    let pageNumber = Math.ceil(totalUsersCount / pageSize);

    let pageCount = [];

    for (let i = 1; i <= 20; i++) {
        pageCount.push(i)
    }
    return (
        <div className={style.pageCount}>
            {pageCount.map(p => <span className={currentPage === p && style.current}
                                      onClick={(event) => {
                                          onPageChanged(p)
                                      }}
            >{p}</span>)}
        </div>
    )
}
export default Pagination