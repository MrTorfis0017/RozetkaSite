'use client'
import React, {useEffect} from "react";
import styles from './category-header.module.scss'
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {getNameById} from "@/app/_api/category-page/api";

type CategoryHeaderProps = {
    categoryId: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({categoryId}) => {
    const dispatch = useAppDispatch();
    const name = useAppSelector((state) => state.categorySlice.header)
    const status = useAppSelector((state) => state.categorySlice.allRequestsComplete);

    useEffect(() => {
        dispatch(getNameById(categoryId));
    }, [])

    return (
        status ?
            (
                <div className={styles.categoryHeader}>
                    <text>
                        {name}
                    </text>
                </div>
            ) : (
                <div>Loading...</div>
            )
    )
}

export default CategoryHeader;