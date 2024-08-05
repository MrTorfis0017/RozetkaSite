import styles from "./sidebar-styles.module.scss";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import StatusEnum from "@/types/status-enum";
import Category from "@/types/category";
import Loading from "@/app/_components/sidebar/loading";
import {findSideBarCategories} from "@/app/_api/main-page/api";


const Sidebar = () => {
    const menuCatalog: Category[] = useAppSelector((state) => state.sideBarSlice.catalogList);
    const status = useAppSelector((state) => state.sideBarSlice.status);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(findSideBarCategories());
    }, [])

    return (
        (status === StatusEnum.DONE) ? (
            <div className={styles.sideBar}>
                {menuCatalog.map((item: Category) => {
                    return (
                        <div key={item.id} className={styles.catalogList}>
                            <img className={styles.catalogImg} src={`/icons/${item.photo}`} alt="catalog-img"
                                 width="20px" height="20px"/>
                            <text className={styles.catalogValue}>
                                {item.name}
                            </text>
                        </div>
                    )
                })}
            </div>
        ) : (
            <Loading/>
        )
    )
}

export default Sidebar;